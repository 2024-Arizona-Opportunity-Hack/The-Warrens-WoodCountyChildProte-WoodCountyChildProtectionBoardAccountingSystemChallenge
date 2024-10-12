// CSVUploader.jsx
import { useState, useRef } from "react";
import Papa from "papaparse";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

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
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
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
          }}
        >
          Convert to JSON
        </Button>
      </div>

      {data.length > 0 && (
        <TableContainer component={Paper} sx={{ marginTop: '20px', width: '80%' }}>
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
        <Paper sx={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', width: '80%' }}>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </Paper>
      )}
    </div>
  );
};

export default CSVUploader;
