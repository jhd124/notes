## The Relational Model
database = set of named relations(or tables)
each relation has a set of named attributes(or columns)
each tuple(or row) has a value for each attribute
each attribute has a type (or domain)  

schema - structural description of relations in database(name of the relations which is tables, attributes of the relations)  
instance - actual contents at given point in time  

NULL - special value for unknown or undefined. 在使用NULLvalue时得注意，比如一条查询GPA<3.5 or GPA >= 3.5看似会检索出所有记录，但事实上查不出GPA为NULL value的  

Key - attribute whose value is unique in each tuple or set of attributes whose combined value are unique  

creating relations (tables) in SQL  
create Table Student(ID, name, GPA, photo)

