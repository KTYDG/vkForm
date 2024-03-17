type catFactType = {
  fact: string,
  length: number,
}

export async function getCatFact(): Promise<catFactType> {
  const response = await fetch("https://catfact.ninja/fact");
  const fact: catFactType = await response.json()
  return fact
}