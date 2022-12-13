// create
export async function createFeatureHandler(feature: any) {
  try {
    const result = await fetch("http://localhost:8080/features", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feature),
    });
    const resultInJson = await result.json();
    console.log("print obj lagret i db:", { resultInJson });
  } catch (e: any) {
    console.log("Error:", { message: e.message });
  }
}

// list
export async function listFeaturesHandler(): Promise<GeoJSON.FeatureCollection> {
  try {
    const result = await fetch("http://localhost:8080/features", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultInJson = await result.json();
    console.log("print obj:", { resultInJson });
    return resultInJson;
  } catch {
    throw new Error("Error");
  }
}

// get
export async function getFeatureHandler(id: string): Promise<any> {
  try {
    const result = await fetch(`http://localhost:8080/features/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultInJson = await result.json();
    console.log("Got feature:", { resultInJson });
    return resultInJson;
  } catch {
    throw new Error("Error");
  }
}
