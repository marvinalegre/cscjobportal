DROP TABLE IF EXISTS job_posts;

CREATE TABLE
  job_posts (
    job_post_id integer NOT NULL,
    closing_date date,
    region character varying(30),
    agency character varying(300),
    monthly_salary numeric(15,1),
    position_title character varying(300),
    plantilla_item_no character varying(300),
    place_of_assignment character varying(300)
  );

