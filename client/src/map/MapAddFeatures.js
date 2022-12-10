


/*
  const [features, setFeatures] = useState([]);



  const getAllFeatures = async () => {
    try {
      const result = await fetch("http://localhost:8080/features", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultInJson = await result.json();
      setFeatures(resultInJson);
      console.log("print obj:", { resultInJson });
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    getAllFeatures();
  }, []);







*/