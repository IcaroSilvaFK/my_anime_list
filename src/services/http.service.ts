import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export class HttpService {
  private client: AxiosInstance
  private static instance: HttpService

  constructor(
    baseUrl: string,
    config?: CreateAxiosDefaults
  ) {
    this.client = axios.create({
      baseURL: baseUrl,
      ...config
    })
  }


  async get<T>(uri: string): Promise<T> {

    const { data } = await this.client.get<T>(uri)

    return data
  }

  //TODO add all rest methods

  static getInstance(baseUrl: string, config?: CreateAxiosDefaults) {
    if (!this.instance) {
      this.instance = new HttpService(baseUrl, config)
    }

    return this.instance
  }
}

export const jikanApi = new HttpService("https://api.jikan.moe/v4")