export interface Cocktail {
  [key: string | null]: string | null
  idDrink: string | null
  strDrink: string | null
  dateModified: string | null
  strAlcoholic: string | null
  strCategory: string | null
  strCreativeCommonsConfirmed: string | null
  strDrinkAlternate: string | null
  strDrinkThumb: string | null
  strGlass: string | null
  strIBA: string | null
  strImageAttribution: string | null
  strImageSource: string | null
  strIngredient1: string | null
  strIngredient2: string | null
  strIngredient3: string | null
  strIngredient4: string | null
  strIngredient5: string | null
  strIngredient6: string | null
  strIngredient7: string | null
  strIngredient8: string | null
  strIngredient9: string | null
  strIngredient10: string | null
  strIngredient11: string | null
  strIngredient12: string | null
  strIngredient13: string | null
  strIngredient14: string | null
  strIngredient15: string | null
  strInstructions: string | null
  strInstructionsDE: string | null
  strInstructionsES: string | null
  strInstructionsFR: string | null
  strInstructionsIT: string | null
  ['strInstructionsZH-HANS']: string | null
  ['strInstructionsZH-HANT']: string | null
  strMeasure1: string | null
  strMeasure2: string | null
  strMeasure3: string | null
  strMeasure4: string | null
  strMeasure5: string | null
  strMeasure6: string | null
  strMeasure7: string | null
  strMeasure8: string | null
  strMeasure9: string | null
  strMeasure10: string | null
  strMeasure11: string | null
  strMeasure12: string | null
  strMeasure13: string | null
  strMeasure14: string | null
  strMeasure15: string | null
  strTags: string | null
  strVideo: string | null
}

export type Cocktails = Cocktail[]

export interface Data {
  drinks: Cocktails
}

export interface Ingredient {
  name: string
  measure: string
  thumbUrl: string
}
