tail -n +2 ../data/cleaned-job-posts.csv > ../data/temp.csv
psql -d cscjobportal -f ../database/schema.sql
psql -d cscjobportal -c "\copy job_posts(job_post_id, position_title, monthly_salary, closing_date, plantilla_item_no, place_of_assignment, agency, region) from '../data/temp.csv' delimiter ',' csv header;";
rm ../data/temp.csv
pg_dump cscjobportal > ../data/cscjobportal.sql;

# pg_dump -a --inserts cscjobportal > ../data/cscjobportal.sql;
# grep "INSERT INTO" ../data/cscjobportal.sql | sed '/INSERT INTO/!d' > ../data/data.sql;
# sed -i 's/public.//g' ../data/data.sql;
# split -l 50000 ../data/data.sql ../data/out

# sed -i 's/INSERT INTO public.job_posts VALUES //g' ../data/data.sql;
# sed -i 's/;/,/g' ../data/data.sql;
# echo "INSERT INTO job_posts VALUES" | cat - ../data/data.sql > ../data/temp && mv ../data/temp ../data/data.sql;
# sed '$s/,$/;/' ../data/data.sql > ../data/temp && mv ../data/temp ../data/data.sql
