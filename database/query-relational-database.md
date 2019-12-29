Steps in creating and using a database
1. Design schema; create using DDL
2. "Bulk load" initial data
3. Repeat: execute queries and modifications

* relational algebra - formal
* SQL - actual/implemented  

IDs of students with GPA > 3.7 applying to stanford

Select Student.ID From Student, Apply Where Student.ID = Apply.ID and GPA > 3.7 and college = "Stanford"
