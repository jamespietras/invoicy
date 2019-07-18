export class BaseNormalizer<OutputType> {
  private normalizationFunction: (input: any) => OutputType;

  constructor(normalizationFunction: (input: any) => OutputType) {
    this.normalizationFunction = normalizationFunction;
  }

   normalize(input: any): OutputType {
    return this.normalizationFunction(input);
  }

   normalizeArray(input: any[]): OutputType[] {
    return input.map(entry => this.normalizationFunction(entry));
  }
}
