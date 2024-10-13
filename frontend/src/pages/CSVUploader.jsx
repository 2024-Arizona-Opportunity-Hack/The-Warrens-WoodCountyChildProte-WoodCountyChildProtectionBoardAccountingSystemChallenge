import React, { useState, useRef } from "react";
import Papa from "papaparse";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Modal, Box, TextField, MenuItem } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Header from "../components/common/Header";
import CloseIcon from '@mui/icons-material/Close';

const CSVUploader = () => {
  const [uploadedData, setUploadedData] = useState([]);
  const [previousUploads, setPreviousUploads] = useState([
    { fileName: "date-update-02.csv", dataType: "Fund Accounting", status: "IN PROGRESS", totalRows: "-", failedRows: "-", uploadedAt: "24 Feb, 2021" },
    { fileName: "date-update-01.csv", dataType: "Donor Management", status: "SUCCESS", totalRows: "144", failedRows: "-", uploadedAt: "22 Sept, 2021" },
  ]);

  const [jsonData, setJsonData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [dataType, setDataType] = useState("");
  const fileInputRef = useRef(null);

  const dataTypes = [
    "Fund Accounting",
    "Grant Tracking",
    "Donor Management",
    "Budgeting",
    "Balance Sheet",
    "Income Statement (Statement of Activities)",
    "Donor Receipts & Acknowledgments",
    "IRS Filings"
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setJsonData(result.data);
        setFileName("");
        setDataType("");
        setModalOpen(true);
      },
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleUpload = () => {
    const newUpload = {
      fileName: fileName || "Unnamed File",
      dataType,
      status: "SUCCESS",
      totalRows: jsonData.length,
      failedRows: "-",
      uploadedAt: new Date().toLocaleDateString(),
    };

    setPreviousUploads((prevUploads) => [...prevUploads, newUpload]);
    setModalOpen(false);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileChange({ target: { files: [file] } });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex-1 overflow-auto relative z-10" style={{ height: '100vh' }}>
      <Header title="Upload CSV and Map Fields" />
      <div className="flex items-center justify-center  w-full">
        <div className="w-11/12 max-w-4xl bg-gray-1000 p-10 text-white flex flex-col gap-8">
          
          {/* File Upload Section */}
          <div className="bg-gray-800 rounded-md shadow-lg p-6 border border-gray-600 w-full pb-16">
            <Typography variant="h6" className="font-semibold mb-4 pb-4">File Details</Typography>
            <div 
              onDrop={handleFileDrop} 
              onDragOver={handleDragOver} 
              className="border-dashed border-2 border-gray-500 rounded-lg p-10 flex flex-col items-center text-center cursor-pointer w-full"
            >
          <CloudUploadIcon fontSize="large" className="text-gray-400 mb-4" />
          <Typography variant="h6" className="mb-2 text-gray-300">Drag and drop file here</Typography>
          <Typography variant="body2" className="text-gray-500 mb-7">Drag and drop or browse your file to get started</Typography>
          <Button
            variant="contained"
            component="label"
            className="px-4 py-5 mt-5 bg-gray-900 border-gray-700 border text-white rounded-md shadow-xl transform transition-transform duration-300 hover:scale-105"
            style={{ marginTop: '20px' }} // Added margin-top for padding
          >
            Browse your files
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              hidden
              ref={fileInputRef}
            />
          </Button>
            </div>
          </div>

          {/* Previous Uploads Section */}
          <div className="bg-gray-800 rounded-md shadow-lg p-6 border border-gray-600 w-full pb-20">
            <Typography variant="h6" className="font-semibold mb-4 pb-4">Previous Uploads</Typography>
            <TableContainer component={Paper} className="bg-gray-800 w-full text-white border-black shadow-lg">
              <Table className="bg-white border text-white">
                <TableHead>
                  <TableRow>
                    <TableCell className="text-white">File Name</TableCell>
                    <TableCell className="text-white">Data Type</TableCell>
                    <TableCell className="text-white">Status</TableCell>
                    <TableCell className="text-white">Total Rows</TableCell>
                    <TableCell className="text-white">Failed Rows</TableCell>
                    <TableCell className="text-white">Uploaded At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {previousUploads.map((upload, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-white">{upload.fileName}</TableCell>
                      <TableCell className="text-white">{upload.dataType}</TableCell>
                      <TableCell className="text-white">{upload.status}</TableCell>
                      <TableCell className="text-white">{upload.totalRows}</TableCell>
                      <TableCell className="text-white">{upload.failedRows}</TableCell>
                      <TableCell className="text-white">{upload.uploadedAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          {/* Modal Popup for JSON Data */}
          <Modal open={modalOpen} onClose={handleCloseModal}>
            <Box 
              className="p-6 bg-gray-800 mx-auto mt-40 rounded-md shadow-lg"
              sx={{
                width: 900,
                height: 700,
                overflowY: "auto",
                marginRight: '18%', // Moves the modal towards the right
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="text-white">File Details</Typography>
                <Button onClick={handleCloseModal}>
                  <CloseIcon className="text-white" />
                </Button>
              </div>
              
              {/* File Name Input with Title */}
              <Typography variant="body2" className="text-gray-400 mb-1">File Name</Typography>
              <Box mb={2}>
                <TextField
                  placeholder="Enter a descriptive file name"
                  variant="outlined"
                  fullWidth
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  InputProps={{
                    style: { backgroundColor: '#ffffff', color: '#000000' }
                  }}
                />
              </Box>

              {/* Data Type Dropdown with Title */}
              <Typography variant="body2" className="text-gray-400 mb-1">Data Type</Typography>
              <Box mb={2}>
                <TextField
                  select
                  placeholder="Select a data type"
                  variant="outlined"
                  fullWidth
                  value={dataType}
                  onChange={(e) => setDataType(e.target.value)}
                  InputProps={{
                    style: { backgroundColor: '#ffffff', color: '#000000' }
                  }}
                >
                  {dataTypes.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              {/* JSON Preview Section */}
              <Typography variant="body2" className="text-gray-400 mb-1">JSON Preview</Typography>
              <Paper className="p-4 bg-gray-100 mb-4" style={{ height: '350px', overflowY: 'auto' }}>
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
              </Paper>

              <div className="flex justify-end mt-4">
                <Button 
                  variant="contained"
                  className="bg-blue-600 text-white"
                  onClick={handleUpload}
                  disabled={!fileName || !dataType}
                >
                  Confirm and Upload
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CSVUploader;
