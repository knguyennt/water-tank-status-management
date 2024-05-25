"use client";

import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  Drawer,
  CssBaseline,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Tooltip,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Nav } from "../../components/nav";
import axios from "axios";
import { BROKEN_REASON, BROKEN_SPECIFICATION, BROKEN_TYPE, DISTRICT, MANUFACTURER, MATERIAL, PIPE_SIZE } from "../../constants/pipeConstants";

export default function Page() {
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerInfoOpen, setDrawerInfoOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dataTable, setDataTable] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [formValues, setFormValues] = useState({
    date: "",
    broken_type: "",
    district: "",
    size: "",
    amount: 0,
    reason: "",
    material: "",
    manufacturer: "",
    thickness: "",
    installed_date: "",
    broken_specification: "",
  });
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setDrawerInfoOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setDrawerInfoOpen(null);
  };

  const updateFormValues = (property, value) => {
    setFormValues((prevProfile) => ({
      ...prevProfile,
      [property]: value,
    }));
  };

  // Handle change of page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle change of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3555/createPipe", formValues);
    await getTableData();
    setFormValues({
      date: "",
      broken_type: "",
      district: "",
      size: "",
      amount: 0,
      reason: "",
      material: "",
      manufacturer: "",
      thickness: "",
      installed_date: "",
      broken_specification: "",
    });
  };

  const handleSpecChange = (event) => {
    setSelectedSpec(event.target.value);
    setSelectedReason(""); // Reset reason when specification changes
    updateFormValues("broken_specification", event.target.value);
  };

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
    updateFormValues("reason", event.target.value);
  };


  const cellStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "50px", // adjust as needed
  };

  const handleSearch = (searchValue) => {
    const lowerCaseSearchString = searchValue.toLowerCase();

    if (!searchValue && dataTable.length > 0) {
      setFilteredData(dataTable);
      return;
    }

    // Filter the list of dictionaries
    const filtered = dataTable.filter((dict) => {
      // Check if any value in the dictionary contains the search string
      return Object.values(dict).some(
        (value) =>
          // Ensure the value is a string and check for the substring
          typeof value === "string" &&
          value.toLowerCase().includes(lowerCaseSearchString)
      );
    });

    setFilteredData(filtered);
  };

  const getTableData = async () => {
    const { data } = await axios.get("http://localhost:3555/getDataTable");

    setDataTable(data.data);
    setFilteredData(data.data);
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />

      <Nav />

      <Container
        component="main"
        maxWidth={false}
        style={{ flexGrow: 1, marginTop: "2rem", width: "100%" }}
      >
        <Typography variant="h4" gutterBottom>
          Nhập Thông Tin Ống Bể
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="date"
                label="Ngày"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  updateFormValues("date", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Loại bể</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formValues.broken_type}
                  label="Loại bể"
                  onChange={(event) =>
                    updateFormValues("broken_type", event.target.value)
                  }
                >
                  {BROKEN_TYPE.map((type, index) => (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quận</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formValues.district}
                  label="Quận"
                  onChange={(event) =>
                    updateFormValues("district", event.target.value)
                  }
                >
                  {DISTRICT.map((district, index) => (
                    <MenuItem key={index} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="amount"
                label="Số lượng bể"
                type="number"
                fullWidth
                onChange={(event) =>
                  updateFormValues("amount", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="specification-label">Đặc điểm bể</InputLabel>
                <Select
                  labelId="specification-label"
                  id="specification"
                  value={selectedSpec}
                  onChange={handleSpecChange}
                  label="Đặc điểm bể"
                >
                  {Object.keys(BROKEN_SPECIFICATION).map((key) => (
                    <MenuItem key={key} value={BROKEN_SPECIFICATION[key]}>
                      {BROKEN_SPECIFICATION[key]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {selectedSpec != BROKEN_SPECIFICATION.KHAC && (
                <FormControl fullWidth margin="normal" disabled={!selectedSpec}>
                  <InputLabel id="reason-label">Nguyên nhân</InputLabel>
                  <Select
                    labelId="reason-label"
                    id="reason"
                    value={selectedReason}
                    onChange={handleReasonChange}
                    label="Nguyên nhân"
                  >
                    {selectedSpec &&
                      BROKEN_REASON[selectedSpec].map((reason, index) => (
                        <MenuItem key={index} value={reason}>
                          {reason}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              )}
              {selectedSpec == BROKEN_SPECIFICATION.KHAC && (
                <FormControl fullWidth margin="normal" disabled={!selectedSpec}>
                  <TextField
                    required
                    id="reason"
                    label="Nguyên nhân"
                    type="text"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    onChange={(event) =>
                      updateFormValues("reason", event.target.value)
                    }
                  />
                </FormControl>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Loại vật liệu
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formValues.material}
                  label="Loại vật liệu"
                  onChange={(event) =>
                    updateFormValues("material", event.target.value)
                  }
                >
                  {MATERIAL.map((material, index) => (
                    <MenuItem key={index} value={material}>
                      {material}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Nhà cung cấp
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formValues.manufacturer}
                  label="Nhà cung cấp"
                  onChange={(event) =>
                    updateFormValues("manufacturer", event.target.value)
                  }
                >
                  {MANUFACTURER.map((manufacturer, index) => (
                    <MenuItem key={index} value={manufacturer}>
                      {manufacturer}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="thickness"
                label="Độ dày"
                type="number"
                fullWidth
                onChange={(event) =>
                  updateFormValues("thickness", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="installed_date"
                label="Ngày lắp đặt gần nhất"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                onChange={(event) =>
                  updateFormValues("installed_date", event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Cỡ ống</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formValues.size}
                  label="Cỡ ống"
                  onChange={(event) =>
                    updateFormValues("size", event.target.value)
                  }
                >
                  {PIPE_SIZE.map((size, index) => (
                    <MenuItem key={index} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box mt={5}>
          <Grid
            container
            alignItems="center"
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="h5" gutterBottom>
                Bảng Dữ Liệu
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="search"
                label="Search"
                type="search"
                variant="outlined"
                onChange={(e) => handleSearch(e.target.value)}
                style={{ minWidth: "250px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Ngày</TableCell>
                  <TableCell>Loại bể</TableCell>
                  <TableCell>Quận</TableCell>
                  <TableCell>Cỡ ống</TableCell>
                  <TableCell>Số lượng bể</TableCell>
                  <TableCell>Nguyên nhân</TableCell>
                  <TableCell>Loại vậy liệu</TableCell>
                  <TableCell>Nhà cung cấp</TableCell>
                  <TableCell>Độ dày</TableCell>
                  <TableCell>Ngày lắp đặt gần nhất</TableCell>
                  <TableCell>Phân loại ống</TableCell>
                  <TableCell>Đặc điểm bể</TableCell>
                  <TableCell>Phân loại vật liệu ống</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.length > 0 &&
                  filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        onClick={() => handleRowClick(row)}
                        style={{ cursor: "pointer" }}
                      >
                        {Object.values(row).map(
                          (
                            value: React.ReactNode,
                            cellIndex
                          ): React.ReactNode => (
                            <TableCell key={cellIndex} style={cellStyle}>
                              <Tooltip title={value} arrow>
                                <span>{value}</span>
                              </Tooltip>
                            </TableCell>
                          )
                        )}
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Drawer
            anchor="right"
            open={drawerInfoOpen}
            onClose={handleDrawerClose}
          >
            <Box p={3} width={300}>
              <Typography variant="h6">Edit Row</Typography>
              {selectedRow &&
                Object.entries(selectedRow).map(([key, value], index) => (
                  <TextField
                    key={index}
                    label={key}
                    defaultValue={value}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                ))}
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDrawerClose}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleDrawerClose}
                  style={{ marginLeft: "1rem" }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        py={3}
        textAlign="center"
        mt="auto"
        bgcolor="primary.main"
        color="primary.contrastText"
      >
        <Typography variant="body2" color="inherit">
          © Công ty cổ phần cấp nước chợ lớn
        </Typography>
      </Box>
    </Box>
  );
}
