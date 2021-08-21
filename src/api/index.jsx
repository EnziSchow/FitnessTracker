import axios from "axios";
import { getCurrentToken } from "../auth";

const BASE_URL = "https://stark-bastion-05693.herokuapp.com/api";

export async function getRoutines() {
  try {
    const { data } = await axios.get(`${BASE_URL}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutine(id) {
  try {
    const { data } = await axios.delete(`${BASE_URL}/routines/${id}`, {
      headers: { Authorization: "Bearer " + getCurrentToken() },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE_URL}/activities`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addActivitiesToRoutines() {}
