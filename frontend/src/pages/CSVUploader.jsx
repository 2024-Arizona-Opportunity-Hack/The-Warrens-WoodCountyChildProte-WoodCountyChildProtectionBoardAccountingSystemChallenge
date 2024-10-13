import { useState, useRef } from "react";
import Papa from "papaparse";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import Header from "../components/common/Header";

const CSVUploader = () => {
  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
        setJsonData(null); // Clear any existing JSON data
      },
    });
  };

  const handleReset = () => {
    setData([]);
    setJsonData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const handleConvertToJson = () => {
    const formattedData = data.map((row, index) => ({
      id: index + 1,
      fund_source: row["Fund Source"] || "",
      type: row["Type"] || "",
      total_amount: row["Total Amount"] || "",
      allocated_amount: row["Allocated Amount"] || "",
      remaining_balance: row["Remaining Balance"] || "",
      restrictions: row["Restrictions"] || "",
      notes: row["Notes"] || ""
    }));
    setJsonData(formattedData);

    // Call the backend API to upload the data
    axios.post('http://localhost:8000/api/fileUpload', formattedData)
      .then((response) => {
        console.log("Data successfully sent to the backend:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };

  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>

    <Header title={"CSV Upload"} />
    <div className={`flex flex-col items-center ${data.length === 0 && !jsonData ? 'justify-center' : 'justify-start'} min-h-screen p-5`}>
      <Typography 
        variant="h4" 
        gutterBottom 
        style={{ 
          color: 'white', 
          textShadow: '1px 1px 2px black, -1px -1px 2px black', 
          marginBottom: '20px'
        }}
      >
        CSV Uploader
      </Typography>

      {/* Centered Button Container */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: 'green',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
            textShadow: '1px 1px 2px black, -1px -1px 2px black',
          }}
        >
          Upload CSV
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            hidden
            ref={fileInputRef} // Attach the ref to the input
          />
        </Button>
        
        <Button
          variant="contained"
          onClick={handleReset}
          sx={{
            backgroundColor: 'red',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'darkred',
            },
            textShadow: '1px 1px 2px black, -1px -1px 2px black',
          }}
        >
          Reset
        </Button>
        
        <Button
          variant="contained"
          onClick={handleConvertToJson}
          sx={{
            backgroundColor: 'blue',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'darkblue',
            },
            textShadow: '1px 1px 2px black, -1px -1px 2px black',
          }}
        >
          Convert to JSON
        </Button>
      </div>

      {data.length > 0 && (
        <TableContainer component={Paper} className="mt-5 w-4/5">
          <Table>
            <TableHead>
              <TableRow>
                {Object.keys(data[0]).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value, idx) => (
                    <TableCell key={idx}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {jsonData && (
        <Paper className="mt-5 p-4 bg-gray-100 w-4/5">
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </Paper>
      )}
    </div>
    </div>
  );
};

export default CSVUploader;
