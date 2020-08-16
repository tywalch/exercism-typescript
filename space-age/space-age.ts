type Planet =  "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune"
const EarthYearInSeconds = 31557600;
const EarthTimeProportion: Record<Planet, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export default class SpaceAge {
  public seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  private round(num: number, decimals: number): number {
    return Number(num.toFixed(decimals));
  }

  public onEarth(): number {
    return this.onPlanet("earth");
  }

  public onMercury(): number {
    return this.onPlanet("mercury");
  }
  
  public onVenus(): number {
    return this.onPlanet("venus");
  }

  public onMars(): number {
    return this.onPlanet("mars");
  }

  public onJupiter(): number {
    return this.onPlanet("jupiter");
  }

  public onSaturn(): number {
    return this.onPlanet("saturn");
  }

  public onUranus(): number {
    return this.onPlanet("uranus");
  }

  public onNeptune(): number {
    return this.onPlanet("neptune");
  }

  public onPlanet(planet: Planet): number {
    let timeProportion = EarthTimeProportion[planet];
    return this.round(this.seconds / timeProportion / EarthYearInSeconds, 2);
  }
}