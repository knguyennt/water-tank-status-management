-- createdb.sql

-- Create a new database
CREATE DATABASE brokenpipemanagement;

-- Connect to the newly created database
\c brokenpipemanagement

-- Create a table named 'users'
CREATE TABLE BrokenPipe (
    id SERIAL PRIMARY KEY,
    date Date,
    broken_type VARCHAR(500),
    size INTEGER,
    pipe_type VARCHAR(500),
    broken_specification VARCHAR(500),
    district VARCHAR(100),
    ammount INTEGER,
    reason VARCHAR(500),
    material VARCHAR(500),
    pipe_material VARCHAR(500),
    manufacturer VARCHAR(500),
    installed_date DATE,
    thickness INTEGER
);


INSERT INTO BrokenPipe (date, broken_type, size, pipe_type, broken_specification, district, ammount, reason, material, pipe_material, manufacturer, installed_date, thickness) VALUES
('2024-05-21', 'Leak', 110, 'Water Supply', 'Pin hole leak', 'District 2', 2500000, 'Corrosion', 'PVC', 'Steel', 'Vinapipe', '2017-03-11', 8),
('2024-05-20', 'Crack', 100, 'Sewage', 'Hairline crack', 'District 4', 1500000, 'Earth movement', 'Concrete', 'PVC', 'Hoaphat', '2016-05-22', 6),
('2024-05-19', 'Burst', 80, 'Drainage', 'Complete rupture', 'District 6', 4000000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2018-10-01', 9),
('2024-05-18', 'Displacement', 140, 'Irrigation', 'Joint misalignment', 'District 8', 6000000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2021-12-14', 11),
('2024-05-17', 'Leak', 75, 'Water Supply', 'Seeping leak', 'District 1', 1000000, 'Wear and tear', 'PVC', 'Steel', 'Vinapipe', '2017-06-18', 5),
('2024-05-16', 'Crack', 130, 'Sewage', 'Transverse crack', 'District 3', 4500000, 'Corrosion', 'Concrete', 'PVC', 'Hoaphat', '2019-09-07', 10),
('2024-05-15', 'Burst', 60, 'Drainage', 'Explosive burst', 'District 5', 3500000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2020-01-03', 7),
('2024-05-14', 'Displacement', 160, 'Irrigation', 'Gasket displacement', 'District 7', 8000000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2022-02-20', 13),
('2024-05-13', 'Leak', 90, 'Water Supply', 'Hairline leak', 'District 2', 2200000, 'Corrosion', 'PVC', 'Steel', 'Vinapipe', '2017-08-25', 9),
('2024-05-12', 'Crack', 120, 'Sewage', 'Longitudinal crack', 'District 4', 4800000, 'Earth movement', 'Concrete', 'PVC', 'Hoaphat', '2016-11-30', 6),
('2024-05-11', 'Burst', 100, 'Drainage', 'Circular burst', 'District 6', 3700000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2018-03-15', 8),
('2024-05-10', 'Displacement', 140, 'Irrigation', 'Joint displacement', 'District 8', 5500000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2020-05-18', 12),
('2024-05-09', 'Leak', 110, 'Water Supply', 'Small hole leak', 'District 1', 2000000, 'Wear and tear', 'PVC', 'Steel', 'Vinapipe', '2016-07-10', 7),
('2024-05-08', 'Crack', 100, 'Sewage', 'Longitudinal crack', 'District 3', 3000000, 'Corrosion', 'Concrete', 'PVC', 'Hoaphat', '2019-10-14', 5),
('2024-05-07', 'Burst', 80, 'Drainage', 'Circular burst', 'District 5', 2700000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2020-12-05', 9),
('2024-05-06', 'Displacement', 150, 'Irrigation', 'Joint misalignment', 'District 7', 6500000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2021-03-24', 10),
('2024-05-05', 'Leak', 75, 'Water Supply', 'Pin hole leak', 'District 2', 1900000, 'Corrosion', 'PVC', 'Steel', 'Vinapipe', '2017-09-29', 8),
('2024-05-04', 'Crack', 130, 'Sewage', 'Transverse crack', 'District 4', 4100000, 'Earth movement', 'Concrete', 'PVC', 'Hoaphat', '2016-11-05', 6),
('2024-05-03', 'Burst', 60, 'Drainage', 'Complete rupture', 'District 6', 2900000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2019-12-20', 7),
('2024-05-02', 'Displacement', 140, 'Irrigation', 'Gasket displacement', 'District 8', 7500000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2021-08-22', 11),
('2024-05-01', 'Leak', 90, 'Water Supply', 'Hairline leak', 'District 1', 2100000, 'Wear and tear', 'PVC', 'Steel', 'Vinapipe', '2017-05-14', 9),
('2024-04-30', 'Crack', 120, 'Sewage', 'Longitudinal crack', 'District 3', 4400000, 'Corrosion', 'Concrete', 'PVC', 'Hoaphat', '2019-11-12', 6),
('2024-04-29', 'Burst', 100, 'Drainage', 'Explosive burst', 'District 5', 3600000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2020-03-27', 8),
('2024-04-28', 'Displacement', 160, 'Irrigation', 'Joint displacement', 'District 7', 7100000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2022-01-01', 12),
('2024-04-27', 'Leak', 110, 'Water Supply', 'Seeping leak', 'District 2', 2300000, 'Corrosion', 'PVC', 'Steel', 'Vinapipe', '2017-12-08', 7),
('2024-04-26', 'Crack', 100, 'Sewage', 'Hairline crack', 'District 4', 3000000, 'Earth movement', 'Concrete', 'PVC', 'Hoaphat', '2016-04-13', 5),
('2024-04-25', 'Burst', 80, 'Drainage', 'Circular burst', 'District 6', 3300000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2018-06-29', 9),
('2024-04-24', 'Displacement', 150, 'Irrigation', 'Joint misalignment', 'District 8', 6800000, 'Improper installation', 'Cast Iron', 'Concrete', 'Saigonpipe', '2020-11-25', 11),
('2024-04-23', 'Leak', 75, 'Water Supply', 'Small hole leak', 'District 1', 1800000, 'Wear and tear', 'PVC', 'Steel', 'Vinapipe', '2017-07-19', 6),
('2024-04-22', 'Crack', 130, 'Sewage', 'Longitudinal crack', 'District 3', 4700000, 'Corrosion', 'Concrete', 'PVC', 'Hoaphat', '2016-09-03', 8),
('2024-04-21', 'Burst', 60, 'Drainage', 'Complete rupture', 'District 5', 3100000, 'Excessive pressure', 'Steel', 'Ductile Iron', 'Binhminh', '2019-04-21', 7);
