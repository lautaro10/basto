import { AnimalRepository } from "../../domain/repositories/AnimalRepository";
import { Http } from "../../domain/repositories/Http";
import { animalRepository } from "../repositories/animalRepository";
import { httpAxios } from "./httpAxios";

const client: Http = httpAxios;

export const AnimalRepositoryFake: AnimalRepository = animalRepository(client);
