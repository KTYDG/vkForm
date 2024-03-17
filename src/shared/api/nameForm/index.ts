export type nameFormType = {
  count: number,
  name: string,
  age: number
}

export async function getAgeByName(name: string, signal: RequestInit["signal"]): Promise<nameFormType> {
  const params = new URLSearchParams({
      name: name,
    })
  const response = await fetch("https://api.agify.io/?"+params, {signal});
  const form: nameFormType = await response.json()
  return form;
}