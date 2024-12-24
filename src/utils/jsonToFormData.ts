type JsonValue = string | number | boolean | null | JsonObject | JsonArray
interface JsonObject {
  [key: string]: JsonValue
}
type JsonArray = JsonValue[]

function jsonToFormData(
  json: JsonObject,
  formData: FormData = new FormData(),
  parentKey: string = ''
): FormData {
  Object.entries(json).forEach(([key, value]) => {
    const fullKey = parentKey ? `${parentKey}[${key}]` : key

    if (value === null || value === undefined) {
      formData.append(fullKey, '')
    } else if (typeof value === 'object' && !(value instanceof File)) {
      if (Array.isArray(value)) {
        value.forEach((arrayItem, index) => {
          const arrayKey = `${fullKey}[${index}]`
          if (typeof arrayItem === 'object') {
            jsonToFormData(arrayItem as JsonObject, formData, arrayKey)
          } else {
            formData.append(arrayKey, arrayItem as string | Blob)
          }
        })
      } else {
        jsonToFormData(value as JsonObject, formData, fullKey)
      }
    } else {
      formData.append(fullKey, value as string | Blob)
    }
  })

  return formData
}

export default jsonToFormData;