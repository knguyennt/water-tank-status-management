"use client"

import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Box, Container, Grid, TextField, Button, TableContainer,
  Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Paper, Drawer,
  List, ListItem, ListItemText, CssBaseline, Divider, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

 const sampleData = [
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '2mm',
      installed_date: '2024-05-20',
    },
    {
      date: '2024-05-19',
      type: 'Type A',
      district: 'District 1',
      size: 'Large',
      amount: 100,
      reason: 'Reason 1',
      material: 'Material 1',
      manufacturer: 'Manufacturer 1',
      thickness: '9mm',
      installed_date: '2024-05-20',
    },
    // Add more sample data as needed
  ];

export default function Page() {
  // Pagination state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle change of page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle change of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Toggle drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />

      {/* Banner */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Form Banner
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          sx={{ width: 250 }}
        >
          <IconButton onClick={toggleDrawer} sx={{ justifyContent: 'flex-end' }}>
            <CloseIcon />
          </IconButton>
          <List>
            {['Home', 'Form', 'Table', 'About'].map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container component="main" maxWidth="md" style={{ flexGrow: 1, marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          User Information Form
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="date"
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="type"
                label="Type"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="district"
                label="District"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="size"
                label="Size"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="amount"
                label="Amount"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="reason"
                label="Reason"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="material"
                label="Material"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="manufacturer"
                label="Manufacturer"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="thickness"
                label="Thickness"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="installed_date"
                label="Installed Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Data Table
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>District</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Material</TableCell>
                  <TableCell>Manufacturer</TableCell>
                  <TableCell>Thickness</TableCell>
                  <TableCell>Installed Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.district}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.reason}</TableCell>
                    <TableCell>{row.material}</TableCell>
                    <TableCell>{row.manufacturer}</TableCell>
                    <TableCell>{row.thickness}</TableCell>
                    <TableCell>{row.installed_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={sampleData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" py={3} textAlign="center" mt="auto" bgcolor="primary.main" color="primary.contrastText">
        <Typography variant="body2" color="inherit">
          © 2024 My Company
        </Typography>
      </Box>
    </Box>
  );
}

