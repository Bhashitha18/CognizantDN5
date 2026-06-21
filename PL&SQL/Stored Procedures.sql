
Create Employee Table
CREATE TABLE Employee (
    EmpID NUMBER,
    EmpName VARCHAR2(50),
    Salary NUMBER
);
Insert Sample Data
INSERT INTO Employee VALUES (1, 'Srija', 30000);
INSERT INTO Employee VALUES (2, 'Ravi', 40000);
COMMIT;


1. Procedure to Display Employee Details
CREATE OR REPLACE PROCEDURE GetEmployee
(
    p_id IN NUMBER
)
IS
    v_name Employee.EmpName%TYPE;
    v_salary Employee.Salary%TYPE;
BEGIN
    SELECT EmpName, Salary
    INTO v_name, v_salary
    FROM Employee
    WHERE EmpID = p_id;

    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
END;

Execute
EXEC GetEmployee(1);


2. Procedure to Increase Salary
CREATE OR REPLACE PROCEDURE IncreaseSalary
(
    p_id IN NUMBER,
    p_amount IN NUMBER
)
IS
BEGIN
    UPDATE Employee
    SET Salary = Salary + p_amount
    WHERE EmpID = p_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Salary Updated Successfully');
END;

Execute
EXEC IncreaseSalary(1,5000);


3. Procedure to Insert Employee
CREATE OR REPLACE PROCEDURE AddEmployee
(
    p_id NUMBER,
    p_name VARCHAR2,
    p_salary NUMBER
)
IS
BEGIN
    INSERT INTO Employee
    VALUES(p_id,p_name,p_salary);

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Employee Added');
END;

Execute
EXEC AddEmployee(3,'Kiran',35000);
