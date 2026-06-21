DECLARE
    a NUMBER := 10;
    b NUMBER := 20;
    c NUMBER := 15;
BEGIN
    IF a >= b AND a >= c THEN
        DBMS_OUTPUT.PUT_LINE('Largest: ' || a);
    ELSIF b >= a AND b >= c THEN
        DBMS_OUTPUT.PUT_LINE('Largest: ' || b);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Largest: ' || c);
    END IF;
END;
