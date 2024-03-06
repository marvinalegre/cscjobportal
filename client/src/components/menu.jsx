export default function Menu({
  onAgencyViewChange,
  onRegionViewChange,
  onPosTitleViewChange,
  onMonSalaryViewChange,
  onItemNoViewChange,
  onClosingDateViewChange,
}) {
  function handleChange(e) {
    console.log(e.target.value)
  }

  return (
    <div id="menu">
      {/* <label>Agency Name: </label>
      <select>
        <option value="">All Agencies</option>
        <option value="ABRA STATE INSTITUTE OF SCIENCE AND TECHNOLOGY">
          ABRA STATE INSTITUTE OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="ABRA STATE INSTITUTE OF SCIENCES AND TECHNOLOGY">
          ABRA STATE INSTITUTE OF SCIENCES AND TECHNOLOGY
        </option>
        <option value="ADELA SERRA TY MEMORIAL MEDICAL CENTER">
          ADELA SERRA TY MEMORIAL MEDICAL CENTER
        </option>
        <option value="ADIONG MEMORIAL POLYTECHNIC STATE COLLEGE">
          ADIONG MEMORIAL POLYTECHNIC STATE COLLEGE
        </option>
        <option value="ADVANCED SCIENCE AND TECHNOLOGY INSTITUTE">
          ADVANCED SCIENCE AND TECHNOLOGY INSTITUTE
        </option>
        <option value="AFP MEDICAL CENTER">AFP MEDICAL CENTER</option>
        <option value="AGRICULTURAL CREDIT AND POLICY COUNCIL">
          AGRICULTURAL CREDIT AND POLICY COUNCIL
        </option>
        <option value="AGRICULTURAL TRAINING INSTITUTE">
          AGRICULTURAL TRAINING INSTITUTE
        </option>
        <option value="AGUSAN DEL SUR STATE COLLEGE OF AGRICULTURE AND TECHNOLOGY">
          AGUSAN DEL SUR STATE COLLEGE OF AGRICULTURE AND TECHNOLOGY
        </option>
        <option value="AKLAN STATE UNIVERSITY">AKLAN STATE UNIVERSITY</option>
        <option value="ALCALA WATER DISTRICT">ALCALA WATER DISTRICT</option>
        <option value="ALIMODIAN WATER DISTRICT">
          ALIMODIAN WATER DISTRICT
        </option>
        <option value="ALITAGTAG WATER DISTRICT">
          ALITAGTAG WATER DISTRICT
        </option>
        <option value="AMADEO WATER DISTRICT">AMADEO WATER DISTRICT</option>
        <option value="AMAI PAKPAK MEDICAL CENTER">
          AMAI PAKPAK MEDICAL CENTER
        </option>
        <option value="AMANG RODRIGUEZ MEDICAL CENTER">
          AMANG RODRIGUEZ MEDICAL CENTER
        </option>
        <option value="ANTI-RED TAPE AUTHORITY">ANTI-RED TAPE AUTHORITY</option>
        <option value="ARMED FORCES OF THE PHILIPPINES">
          ARMED FORCES OF THE PHILIPPINES
        </option>
        <option value="ASUNCION WATER DISTRICT">ASUNCION WATER DISTRICT</option>
        <option value="AURORA PACIFIC ECONOMIC ZONE & FREEPORT AUTHORITY">
          AURORA PACIFIC ECONOMIC ZONE & FREEPORT AUTHORITY
        </option>
        <option value="AURORA STATE COLLEGE OF TECHNOLOGY">
          AURORA STATE COLLEGE OF TECHNOLOGY
        </option>
        <option value="AUTHORITY OF FREEPORT AREA OF BATAAN">
          AUTHORITY OF FREEPORT AREA OF BATAAN
        </option>
        <option value="BACOLOR WATER DISTRICT">BACOLOR WATER DISTRICT</option>
        <option value="BAGUIO CITY WATER DISTRICT">
          BAGUIO CITY WATER DISTRICT
        </option>
        <option value="BAGUIO GENERAL HOSPITAL AND MEDICAL CENTER">
          BAGUIO GENERAL HOSPITAL AND MEDICAL CENTER
        </option>
        <option value="BAIS WATER DISTRICT">BAIS WATER DISTRICT</option>
        <option value="BALAYAN WATER DISTRICT">BALAYAN WATER DISTRICT</option>
        <option value="BANGA WATER DISTRICT">BANGA WATER DISTRICT</option>
        <option value="BANGKO SENTRAL NG PILIPINAS">
          BANGKO SENTRAL NG PILIPINAS
        </option>
        <option value="BANGSAMORO ATTORNEY GENERALS OFFICE">
          BANGSAMORO ATTORNEY GENERALS OFFICE
        </option>
        <option value="BANGSAMORO INFORMATION AND TECHNOLOGY OFFICE">
          BANGSAMORO INFORMATION AND TECHNOLOGY OFFICE
        </option>
        <option value="BANGSAMORO INFORMATION OFFICE">
          BANGSAMORO INFORMATION OFFICE
        </option>
        <option value="BANGSAMORO PILGRIMAGE AUTHORITY">
          BANGSAMORO PILGRIMAGE AUTHORITY
        </option>
        <option value="BANGSAMORO PLANNING AND DEVELOPMENT AUTHORITY">
          BANGSAMORO PLANNING AND DEVELOPMENT AUTHORITY
        </option>
        <option value="BANGSAMORO TRANSITION AUTHORITY">
          BANGSAMORO TRANSITION AUTHORITY
        </option>
        <option value="BANGSAMORO WOMEN COMMISSION">
          BANGSAMORO WOMEN COMMISSION
        </option>
        <option value="BANGSAMORO YOUTH COMMISSION">
          BANGSAMORO YOUTH COMMISSION
        </option>
        <option value="BANI WATER DISTRICT">BANI WATER DISTRICT</option>
        <option value="BANSALAN WATER DISTRICT">BANSALAN WATER DISTRICT</option>
        <option value="BARMM- Office of the Chief Minister">
          BARMM- Office of the Chief Minister
        </option>
        <option value="BASES CONVERSION DEVELOPMENT AUTHORITY">
          BASES CONVERSION DEVELOPMENT AUTHORITY
        </option>
        <option value="BASILAN STATE COLLEGE">BASILAN STATE COLLEGE</option>
        <option value="BATAAN GENERAL HOSPITAL AND MEDICAL CENTER">
          BATAAN GENERAL HOSPITAL AND MEDICAL CENTER
        </option>
        <option value="BATAAN PENINSULA STATE UNIVERSITY">
          BATAAN PENINSULA STATE UNIVERSITY
        </option>
        <option value="BATANES STATE COLLEGE">BATANES STATE COLLEGE</option>
        <option value="BATANGAS STATE UNIVERSITY">
          BATANGAS STATE UNIVERSITY
        </option>
        <option value="BATO WATER DISTRICT">BATO WATER DISTRICT</option>
        <option value="BENGUET STATE UNIVERSITY">
          BENGUET STATE UNIVERSITY
        </option>
        <option value="BICOL MEDICAL CENTER">BICOL MEDICAL CENTER</option>
        <option value="BICOL REGION GENERAL HOSPITAL AND GERIATRIC MEDICAL CENTER">
          BICOL REGION GENERAL HOSPITAL AND GERIATRIC MEDICAL CENTER
        </option>
        <option value="BICOL REGIONAL HOSPITAL AND MEDICAL CENTER">
          BICOL REGIONAL HOSPITAL AND MEDICAL CENTER
        </option>
        <option value="BICOL STATE COLLEGE OF APPLIED SCIENCES AND TECHNOLOGY">
          BICOL STATE COLLEGE OF APPLIED SCIENCES AND TECHNOLOGY
        </option>
        <option value="BICOL UNIVERSITY">BICOL UNIVERSITY</option>
        <option value="BILIRAN PROVINCE STATE UNIVERSITY">
          BILIRAN PROVINCE STATE UNIVERSITY
        </option>
        <option value="BINALONAN WATER DISTRICT">
          BINALONAN WATER DISTRICT
        </option>
        <option value="BIODIVERSITY MANAGEMENT BUREAU">
          BIODIVERSITY MANAGEMENT BUREAU
        </option>
        <option value="BOARD OF INVESTMENTS">BOARD OF INVESTMENTS</option>
        <option value="BOCAUE WATER DISTRICT">BOCAUE WATER DISTRICT</option>
        <option value="BOHOL ISLAND STATE UNIVERSITY">
          BOHOL ISLAND STATE UNIVERSITY
        </option>
        <option value="BOY SCOUTS OF THE PHILIPPINES">
          BOY SCOUTS OF THE PHILIPPINES
        </option>
        <option value="BUKIDNON STATE UNIVERSITY">
          BUKIDNON STATE UNIVERSITY
        </option>
        <option value="BULACAN AGRICULTURAL STATE COLLEGE">
          BULACAN AGRICULTURAL STATE COLLEGE
        </option>
        <option value="Bulacan State University">
          Bulacan State University
        </option>
        <option value="BUREAU OF AGRICULTURAL AND FISHERIES ENGINEERING">
          BUREAU OF AGRICULTURAL AND FISHERIES ENGINEERING
        </option>
        <option value="BUREAU OF AGRICULTURAL AND FISHERIES PRODUCT STANDARD">
          BUREAU OF AGRICULTURAL AND FISHERIES PRODUCT STANDARD
        </option>
        <option value="BUREAU OF AGRICULTURAL RESEARCH">
          BUREAU OF AGRICULTURAL RESEARCH
        </option>
        <option value="BUREAU OF ANIMAL INDUSTRY">
          BUREAU OF ANIMAL INDUSTRY
        </option>
        <option value="Bureau of Broadcast Services">
          Bureau of Broadcast Services
        </option>
        <option value="BUREAU OF CORRECTIONS">BUREAU OF CORRECTIONS</option>
        <option value="Bureau of Customs">Bureau of Customs</option>
        <option value="BUREAU OF FIRE PROTECTION">
          BUREAU OF FIRE PROTECTION
        </option>
        <option value="BUREAU OF FISHERIES AND AQUATIC RESOURCES">
          BUREAU OF FISHERIES AND AQUATIC RESOURCES
        </option>
        <option value="BUREAU OF IMMIGRATION">BUREAU OF IMMIGRATION</option>
        <option value="BUREAU OF INTERNAL REVENUE">
          BUREAU OF INTERNAL REVENUE
        </option>
        <option value="BUREAU OF JAIL MANAGEMENT AND PENOLOGY">
          BUREAU OF JAIL MANAGEMENT AND PENOLOGY
        </option>
        <option value="BUREAU OF PLANT INDUSTRY">
          BUREAU OF PLANT INDUSTRY
        </option>
        <option value="BUREAU OF QUARANTINE AND INTERNATIONAL HEALTH SURVEILLANCE">
          BUREAU OF QUARANTINE AND INTERNATIONAL HEALTH SURVEILLANCE
        </option>
        <option value="BUREAU OF SOILS AND WATER MANAGEMENT">
          BUREAU OF SOILS AND WATER MANAGEMENT
        </option>
        <option value="BUREAU OF THE TREASURY">BUREAU OF THE TREASURY</option>
        <option value="BUSTOS WATER DISTRICT">BUSTOS WATER DISTRICT</option>
        <option value="BUTUAN CITY WATER DISTRICT">
          BUTUAN CITY WATER DISTRICT
        </option>
        <option value="CABAGAN WATER DISTRICT">CABAGAN WATER DISTRICT</option>
        <option value="CABANATUAN CITY WATER DISTRICT">
          CABANATUAN CITY WATER DISTRICT
        </option>
        <option value="CABUYAO WATER DISTRICT">CABUYAO WATER DISTRICT</option>
        <option value="CAGAYAN ECONOMIC ZONE AUTHORITY">
          CAGAYAN ECONOMIC ZONE AUTHORITY
        </option>
        <option value="CAGAYAN STATE UNIVERSITY">
          CAGAYAN STATE UNIVERSITY
        </option>
        <option value="CAGAYAN VALLEY MEDICAL CENTER">
          CAGAYAN VALLEY MEDICAL CENTER
        </option>
        <option value="CALABANGA WATER DISTRICT">
          CALABANGA WATER DISTRICT
        </option>
        <option value="CAMARINES NORTE STATE COLLEGE">
          CAMARINES NORTE STATE COLLEGE
        </option>
        <option value="CAMARINES SUR POLYTECHNIC COLLEGES">
          CAMARINES SUR POLYTECHNIC COLLEGES
        </option>
        <option value="CAMARINES SUR TREATMENT AND REHABILITATION CENTER">
          CAMARINES SUR TREATMENT AND REHABILITATION CENTER
        </option>
        <option value="CAMIGUIN GENERAL HOSPITAL">
          CAMIGUIN GENERAL HOSPITAL
        </option>
        <option value="CAMIGUIN POLYTECHNIC STATE COLLEGE">
          CAMIGUIN POLYTECHNIC STATE COLLEGE
        </option>
        <option value="CANTILAN WATER DISTRICT">CANTILAN WATER DISTRICT</option>
        <option value="CAPIZ STATE UNIVERSITY">CAPIZ STATE UNIVERSITY</option>
        <option value="CAPUL AGRO-INDUSTRIAL SCHOOL">
          CAPUL AGRO-INDUSTRIAL SCHOOL
        </option>
        <option value="CARAGA STATE UNIVERSITY">CARAGA STATE UNIVERSITY</option>
        <option value="CARLOS HILADO MEMORIAL STATE UNIVERSITY">
          CARLOS HILADO MEMORIAL STATE UNIVERSITY
        </option>
        <option value="CARMONA WATER DISTRICT">CARMONA WATER DISTRICT</option>
        <option value="CATANDUANES STATE UNIVERSITY">
          CATANDUANES STATE UNIVERSITY
        </option>
        <option value="CATARMAN WATER DISTRICT">CATARMAN WATER DISTRICT</option>
        <option value="CAUAYAN WATER DISTRICT">CAUAYAN WATER DISTRICT</option>
        <option value="CAVITE STATE UNIVERSITY">CAVITE STATE UNIVERSITY</option>
        <option value="CEBU CITY NATIONAL SCIENCE HIGH SCHOOL">
          CEBU CITY NATIONAL SCIENCE HIGH SCHOOL
        </option>
        <option value="CEBU NORMAL UNIVERSITY">CEBU NORMAL UNIVERSITY</option>
        <option value="CEBU SOUTH MEDICAL CENTER">
          CEBU SOUTH MEDICAL CENTER
        </option>
        <option value="CEBU TECHNOLOGICAL UNIVERSITY">
          CEBU TECHNOLOGICAL UNIVERSITY
        </option>
        <option value="CENTRAL BICOL STATE UNIVERSITY OF AGRICULTURE">
          CENTRAL BICOL STATE UNIVERSITY OF AGRICULTURE
        </option>
        <option value="CENTRAL LUZON STATE UNIVERSITY">
          CENTRAL LUZON STATE UNIVERSITY
        </option>
        <option value="CENTRAL MINDANAO UNIVERSITY">
          CENTRAL MINDANAO UNIVERSITY
        </option>
        <option value="CENTRAL PHILIPPINES STATE UNIVERSITY">
          CENTRAL PHILIPPINES STATE UNIVERSITY
        </option>
        <option value="CGO CANDON, ILOCOS SUR">CGO CANDON, ILOCOS SUR</option>
        <option value="CGO KORONADAL, SOUTH COTABATO">
          CGO KORONADAL, SOUTH COTABATO
        </option>
        <option value="CGO TALISAY, NEGROS OCCIDENTAL">
          CGO TALISAY, NEGROS OCCIDENTAL
        </option>
        <option value="CGO ALAMINOS, PANGASINAN">
          CGO ALAMINOS, PANGASINAN
        </option>
        <option value="CGO ANGELES">CGO ANGELES</option>
        <option value="CGO ANTIPOLO">CGO ANTIPOLO</option>
        <option value="CGO BACOLOD">CGO BACOLOD</option>
        <option value="CGO BACOOR, CAVITE">CGO BACOOR, CAVITE</option>
        <option value="CGO BAGO, NEGROS OCCIDENTAL">
          CGO BAGO, NEGROS OCCIDENTAL
        </option>
        <option value="CGO BAGUIO, BENGUET">CGO BAGUIO, BENGUET</option>
        <option value="CGO BAIS, NEGROS ORIENTAL">
          CGO BAIS, NEGROS ORIENTAL
        </option>
        <option value="CGO BALANGA, BATAAN">CGO BALANGA, BATAAN</option>
        <option value="CGO BATAC CITY">CGO BATAC CITY</option>
        <option value="CGO BATANGAS CITY (CAPITAL)">
          CGO BATANGAS CITY (CAPITAL)
        </option>
        <option value="CGO BAYAWAN CITY">CGO BAYAWAN CITY</option>
        <option value="CGO BAYBAY, LEYTE">CGO BAYBAY, LEYTE</option>
        <option value="CGO BAYUGAN, AGUSAN DEL SUR">
          CGO BAYUGAN, AGUSAN DEL SUR
        </option>
        <option value="CGO BISLIG">CGO BISLIG</option>
        <option value="CGO BISLIG, SURIGAO DEL SUR">
          CGO BISLIG, SURIGAO DEL SUR
        </option>
        <option value="CGO BOGO, CEBU">CGO BOGO, CEBU</option>
        <option value="CGO BORONGAN, EASTERN SAMAR">
          CGO BORONGAN, EASTERN SAMAR
        </option>
        <option value="CGO BUTUAN , AGUSAN DEL NORTE">
          CGO BUTUAN , AGUSAN DEL NORTE
        </option>
        <option value="CGO CABADBARAN CITY, AGUSAN DEL NORTE">
          CGO CABADBARAN CITY, AGUSAN DEL NORTE
        </option>
        <option value="CGO CABANATUAN">CGO CABANATUAN</option>
        <option value="CGO CADIZ">CGO CADIZ</option>
        <option value="CGO CAGAYAN DE ORO, MISAMIS ORIENTAL">
          CGO CAGAYAN DE ORO, MISAMIS ORIENTAL
        </option>
        <option value="CGO CALAMBA, LAGUNA">CGO CALAMBA, LAGUNA</option>
        <option value="CGO CALAPAN">CGO CALAPAN</option>
        <option value="CGO CALBAYOG">CGO CALBAYOG</option>
        <option value="CGO CALOOCAN, NCR">CGO CALOOCAN, NCR</option>
        <option value="CGO CANDON, ILOCOS SUR">CGO CANDON, ILOCOS SUR</option>
        <option value="CGO CANLAON, NEGROS ORIENTAL">
          CGO CANLAON, NEGROS ORIENTAL
        </option>
        <option value="CGO CARCAR, CEBU">CGO CARCAR, CEBU</option>
        <option value="CGO CATBALOGAN, SAMAR (WESTERN)">
          CGO CATBALOGAN, SAMAR (WESTERN)
        </option>
        <option value="CGO CAUAYAN, ISABELA">CGO CAUAYAN, ISABELA</option>
        <option value="CGO CAVITE CITY LGU">CGO CAVITE CITY LGU</option>
        <option value="CGO CEBU">CGO CEBU</option>
        <option value="CGO COTABATO CITY">CGO COTABATO CITY</option>
        <option value="CGO DANAO, CEBU">CGO DANAO, CEBU</option>
        <option value="CGO DASMARINAS, CAVITE">CGO DASMARINAS, CAVITE</option>
        <option value="CGO DAVAO">CGO DAVAO</option>
        <option value="CGO DIGOS">CGO DIGOS</option>
        <option value="CGO DIPOLOG">CGO DIPOLOG</option>
        <option value="CGO DUMAGUETE, NEGROS ORIENTAL">
          CGO DUMAGUETE, NEGROS ORIENTAL
        </option>
        <option value="CGO ESCALANTE">CGO ESCALANTE</option>
        <option value="CGO GAPAN, NUEVA ECIJA">CGO GAPAN, NUEVA ECIJA</option>
        <option value="CGO GENERAL SANTOS CITY">CGO GENERAL SANTOS CITY</option>
        <option value="CGO GINGOOG">CGO GINGOOG</option>
        <option value="CGO GUIHULNGAN, NEGROS ORIENTAL">
          CGO GUIHULNGAN, NEGROS ORIENTAL
        </option>
        <option value="CGO HIMAMAYLAN">CGO HIMAMAYLAN</option>
        <option value="CGO ILAGAN (CAPITAL), ISABELA">
          CGO ILAGAN (CAPITAL), ISABELA
        </option>
        <option value="CGO ILOILO CITY (CAPITAL)">
          CGO ILOILO CITY (CAPITAL)
        </option>
        <option value="CGO IMUS CITY LGU">CGO IMUS CITY LGU</option>
        <option value="CGO IRIGA, CAMARINES SUR">
          CGO IRIGA, CAMARINES SUR
        </option>
        <option value="CGO ISABELA BASILAN">CGO ISABELA BASILAN</option>
        <option value="CGO ISABELA, BASILAN">CGO ISABELA, BASILAN</option>
        <option value="CGO ISABELA, ZAMBOANGA SIBUGAY">
          CGO ISABELA, ZAMBOANGA SIBUGAY
        </option>
        <option value="CGO ISLAND GARDEN CITY OF SAMAL">
          CGO ISLAND GARDEN CITY OF SAMAL
        </option>
        <option value="CGO KABANKALAN, NEGROS OCCIDENTAL">
          CGO KABANKALAN, NEGROS OCCIDENTAL
        </option>
        <option value="CGO KIDAPAWAN , NORTH COTABATO">
          CGO KIDAPAWAN , NORTH COTABATO
        </option>
        <option value="CGO KIDAPAWAN, NORTH COTABATO">
          CGO KIDAPAWAN, NORTH COTABATO
        </option>
        <option value="CGO KORONADAL, SOUTH COTABATO">
          CGO KORONADAL, SOUTH COTABATO
        </option>
        <option value="CGO LA CARLOTA, NEGROS OCCIDENTAL">
          CGO LA CARLOTA, NEGROS OCCIDENTAL
        </option>
        <option value="CGO LAMITAN, BASILAN">CGO LAMITAN, BASILAN</option>
        <option value="CGO LAOAG CITY (CAPITAL)">
          CGO LAOAG CITY (CAPITAL)
        </option>
        <option value="CGO LAPU-LAPU, CEBU">CGO LAPU-LAPU, CEBU</option>
        <option value="CGO LAS PIÑAS, NCR">CGO LAS PIÑAS, NCR</option>
        <option value="CGO LEGAZPI, ALBAY">CGO LEGAZPI, ALBAY</option>
        <option value="CGO LIGAO, ALBAY">CGO LIGAO, ALBAY</option>
        <option value="CGO LIPA, BATANGAS">CGO LIPA, BATANGAS</option>
        <option value="CGO LUCENA, QUEZON">CGO LUCENA, QUEZON</option>
        <option value="CGO MAASIN, SOUTHERN LEYTE">
          CGO MAASIN, SOUTHERN LEYTE
        </option>
        <option value="CGO MAKATI, NCR">CGO MAKATI, NCR</option>
        <option value="CGO MALABON, NCR">CGO MALABON, NCR</option>
        <option value="CGO MALAYBALAY">CGO MALAYBALAY</option>
        <option value="CGO MALOLOS">CGO MALOLOS</option>
        <option value="CGO MANDAUE, CEBU">CGO MANDAUE, CEBU</option>
        <option value="CGO MARAWI, LANAO DEL SUR">
          CGO MARAWI, LANAO DEL SUR
        </option>
        <option value="CGO MASBATE CITY (CAPITAL)">
          CGO MASBATE CITY (CAPITAL)
        </option>
        <option value="CGO MATI, DAVAO ORIENTAL">
          CGO MATI, DAVAO ORIENTAL
        </option>
        <option value="CGO MEYCAUAYAN, BULACAN">CGO MEYCAUAYAN, BULACAN</option>
        <option value="CGO MUNTINLUPA, NCR">CGO MUNTINLUPA, NCR</option>
        <option value="CGO NAGA, CAMARINES SUR">CGO NAGA, CAMARINES SUR</option>
        <option value="CGO NAGA, CEBU">CGO NAGA, CEBU</option>
        <option value="CGO NAVOTAS, CITY">CGO NAVOTAS, CITY</option>
        <option value="CGO ORMOC">CGO ORMOC</option>
        <option value="CGO OROQUIETA, MISAMIS OCCIDENTAL">
          CGO OROQUIETA, MISAMIS OCCIDENTAL
        </option>
        <option value="CGO OZAMIS">CGO OZAMIS</option>
        <option value="CGO PAGADIAN , ZAMBOANGA DEL SUR">
          CGO PAGADIAN , ZAMBOANGA DEL SUR
        </option>
        <option value="CGO PALAYAN, NUEVA ECIJA">
          CGO PALAYAN, NUEVA ECIJA
        </option>
        <option value="CGO PANABO, DAVAO DEL NORTE">
          CGO PANABO, DAVAO DEL NORTE
        </option>
        <option value="CGO PASIG">CGO PASIG</option>
        <option value="CGO PASSI, ILOILO">CGO PASSI, ILOILO</option>
        <option value="CGO Puerto Princesa">CGO Puerto Princesa</option>
        <option value="CGO QUEZON">CGO QUEZON</option>
        <option value="CGO ROXAS, CAPIZ">CGO ROXAS, CAPIZ</option>
        <option value="CGO SAGAY, NEGROS OCCIDENTAL">
          CGO SAGAY, NEGROS OCCIDENTAL
        </option>
        <option value="CGO SAN CARLOS, NEGROS OCCIDENTAL">
          CGO SAN CARLOS, NEGROS OCCIDENTAL
        </option>
        <option value="CGO SAN CARLOS, PANGASINAN">
          CGO SAN CARLOS, PANGASINAN
        </option>
        <option value="CGO SAN FERNANDO">CGO SAN FERNANDO</option>
        <option value="CGO SAN FERNANDO, PAMPANGA">
          CGO SAN FERNANDO, PAMPANGA
        </option>
        <option value="CGO SAN JOSE DEL MONTE, BULACAN">
          CGO SAN JOSE DEL MONTE, BULACAN
        </option>
        <option value="CGO SAN JOSE, NUEVA ECIJA">
          CGO SAN JOSE, NUEVA ECIJA
        </option>
        <option value="CGO SAN JUAN, NCR">CGO SAN JUAN, NCR</option>
        <option value="CGO SAN PABLO, LAGUNA">CGO SAN PABLO, LAGUNA</option>
        <option value="CGO SAN PEDRO, LAGUNA">CGO SAN PEDRO, LAGUNA</option>
        <option value="CGO SANTA ROSA, LAGUNA">CGO SANTA ROSA, LAGUNA</option>
        <option value="CGO SANTA ROSA, NUEVA ECIJA">
          CGO SANTA ROSA, NUEVA ECIJA
        </option>
        <option value="CGO SANTO TOMAS, BATANGAS">
          CGO SANTO TOMAS, BATANGAS
        </option>
        <option value="CGO SCIENCE CITY OF MUÑOZ, NUEVA ECIJA">
          CGO SCIENCE CITY OF MUÑOZ, NUEVA ECIJA
        </option>
        <option value="CGO SILAY">CGO SILAY</option>
        <option value="CGO SIPALAY, NEGROS OCCIDENTAL">
          CGO SIPALAY, NEGROS OCCIDENTAL
        </option>
        <option value="CGO SORSOGON CITY (CAPITAL)">
          CGO SORSOGON CITY (CAPITAL)
        </option>
        <option value="CGO SURIGAO , SURIGAO DEL NORTE">
          CGO SURIGAO , SURIGAO DEL NORTE
        </option>
        <option value="CGO TABACO, ALBAY">CGO TABACO, ALBAY</option>
        <option value="CGO TABUK">CGO TABUK</option>
        <option value="CGO TACLOBAN">CGO TACLOBAN</option>
        <option value="CGO TACURONG, SULTAN KUDARAT">
          CGO TACURONG, SULTAN KUDARAT
        </option>
        <option value="CGO TAGAYTAY, CAVITE">CGO TAGAYTAY, CAVITE</option>
        <option value="CGO TAGBILARAN, BOHOL">CGO TAGBILARAN, BOHOL</option>
        <option value="CGO TAGUM , DAVAO DEL NORTE">
          CGO TAGUM , DAVAO DEL NORTE
        </option>
        <option value="CGO TALISAY">CGO TALISAY</option>
        <option value="CGO TANAUAN CITY LGU">CGO TANAUAN CITY LGU</option>
        <option value="CGO TANDAG, SURIGAO DEL SUR">
          CGO TANDAG, SURIGAO DEL SUR
        </option>
        <option value="CGO TANGUB, MISAMIS OCCIDENTAL">
          CGO TANGUB, MISAMIS OCCIDENTAL
        </option>
        <option value="CGO TANJAY, NEGROS ORIENTAL">
          CGO TANJAY, NEGROS ORIENTAL
        </option>
        <option value="CGO TARLAC CITY (CAPITAL)">
          CGO TARLAC CITY (CAPITAL)
        </option>
        <option value="CGO TAYABAS, QUEZON">CGO TAYABAS, QUEZON</option>
        <option value="CGO TOLEDO, CEBU">CGO TOLEDO, CEBU</option>
        <option value="CGO TRECE MARTIRES , CAVITE">
          CGO TRECE MARTIRES , CAVITE
        </option>
        <option value="CGO TUGUEGARAO, CAGAYAN">CGO TUGUEGARAO, CAGAYAN</option>
        <option value="CGO URDANETA, PANGASINAN">
          CGO URDANETA, PANGASINAN
        </option>
        <option value="CGO VALENCIA, BUKIDNON">CGO VALENCIA, BUKIDNON</option>
        <option value="CGO VALENZUELA, NCR">CGO VALENZUELA, NCR</option>
        <option value="CGO VICTORIAS, NEGROS OCCIDENTAL">
          CGO VICTORIAS, NEGROS OCCIDENTAL
        </option>
        <option value="CGO VIGAN">CGO VIGAN</option>
        <option value="CGO ZAMBOANGA">CGO ZAMBOANGA</option>
        <option value="CITY GOVERNMENT OF CALAMBA">
          CITY GOVERNMENT OF CALAMBA
        </option>
        <option value="CITY GOVERNMENT OF EL SALVADOR">
          CITY GOVERNMENT OF EL SALVADOR
        </option>
        <option value="City Government of Parañaque">
          City Government of Parañaque
        </option>
        <option value="City Government of Taguig">
          City Government of Taguig
        </option>
        <option value="CITY OF SAN FERNANDO WATER DISTRICT">
          CITY OF SAN FERNANDO WATER DISTRICT
        </option>
        <option value="CIVIL AERONAUTICS BOARD">CIVIL AERONAUTICS BOARD</option>
        <option value="CIVIL AVIATION AUTHORITY OF THE PHILIPPINES">
          CIVIL AVIATION AUTHORITY OF THE PHILIPPINES
        </option>
        <option value="CIVIL SERVICE COMMISSION">
          CIVIL SERVICE COMMISSION
        </option>
        <option value="Climate Change Commission">
          Climate Change Commission
        </option>
        <option value="COMMISSION ON APPOINTMENTS">
          COMMISSION ON APPOINTMENTS
        </option>
        <option value="COMMISSION ON AUDIT">COMMISSION ON AUDIT</option>
        <option value="COMMISSION ON ELECTIONS">COMMISSION ON ELECTIONS</option>
        <option value="COMMISSION ON FILIPINOS OVERSEAS">
          COMMISSION ON FILIPINOS OVERSEAS
        </option>
        <option value="COMMISSION ON HIGHER EDUCATION">
          COMMISSION ON HIGHER EDUCATION
        </option>
        <option value="COMMISSION ON HUMAN RIGHTS OF THE PHILIPPINES">
          COMMISSION ON HUMAN RIGHTS OF THE PHILIPPINES
        </option>
        <option value="COMMISSION ON POPULATION">
          COMMISSION ON POPULATION
        </option>
        <option value="COMMISSION ON POPULATION AND DEVELOPMENT">
          COMMISSION ON POPULATION AND DEVELOPMENT
        </option>
        <option value="COMMISSION ON POPULATION AND DEVELOPMENT - REGION VI">
          COMMISSION ON POPULATION AND DEVELOPMENT - REGION VI
        </option>
        <option value="CONNER DISTRICT HOSPITAL">
          CONNER DISTRICT HOSPITAL
        </option>
        <option value="CONSTRUCTION INDUSTRY AUTHORITY OF THE PHILIPPINES">
          CONSTRUCTION INDUSTRY AUTHORITY OF THE PHILIPPINES
        </option>
        <option value="COOPERATIVE AND SOCIAL ENTERPRISE AUTHORITY">
          COOPERATIVE AND SOCIAL ENTERPRISE AUTHORITY
        </option>
        <option value="COOPERATIVE DEVELOPMENT AUTHORITY">
          COOPERATIVE DEVELOPMENT AUTHORITY
        </option>
        <option value="CORAZON LOCSIN MONTELIBANO MEMORIAL REGIONAL HOSPITAL">
          CORAZON LOCSIN MONTELIBANO MEMORIAL REGIONAL HOSPITAL
        </option>
        <option value="COTABATO FOUNDATION COLLEGE OF SCIENCE AND TECHNOLOGY">
          COTABATO FOUNDATION COLLEGE OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="COTABATO REGIONAL AND MEDICAL CENTER">
          COTABATO REGIONAL AND MEDICAL CENTER
        </option>
        <option value="COTABATO SANITARIUM">COTABATO SANITARIUM</option>
        <option value="COTABATO STATE UNIVERSITY">
          COTABATO STATE UNIVERSITY
        </option>
        <option value="COUNCIL FOR THE WELFARE OF CHILDREN">
          COUNCIL FOR THE WELFARE OF CHILDREN
        </option>
        <option value="COURT OF APPEALS">COURT OF APPEALS</option>
        <option value="COURT OF TAX APPEALS">COURT OF TAX APPEALS</option>
        <option value="CREDIT INFORMATION CORPORATION">
          CREDIT INFORMATION CORPORATION
        </option>
        <option value="CULASI WATER DISTRICT">CULASI WATER DISTRICT</option>
        <option value="CULTURAL CENTER OF THE PHILIPPINES">
          CULTURAL CENTER OF THE PHILIPPINES
        </option>
        <option value="DAANBANTAYAN WATER DISTRICT">
          DAANBANTAYAN WATER DISTRICT
        </option>
        <option value="DAGUPAN CITY, PANGASINAN">
          DAGUPAN CITY, PANGASINAN
        </option>
        <option value="DAVAO CITY WATER DISTRICT">
          DAVAO CITY WATER DISTRICT
        </option>
        <option value="DAVAO DE ORO STATE COLLEGE">
          DAVAO DE ORO STATE COLLEGE
        </option>
        <option value="DAVAO DEL NORTE STATE COLLEGE">
          DAVAO DEL NORTE STATE COLLEGE
        </option>
        <option value="DAVAO DEL SUR STATE COLLEGE">
          DAVAO DEL SUR STATE COLLEGE
        </option>
        <option value="DAVAO INTEGRATED DEVELOPMENT PROGRAM">
          DAVAO INTEGRATED DEVELOPMENT PROGRAM
        </option>
        <option value="DAVAO REGIONAL MEDICAL CENTER">
          DAVAO REGIONAL MEDICAL CENTER
        </option>
        <option value="DEL GALLEGO WATER DISTRICT">
          DEL GALLEGO WATER DISTRICT
        </option>
        <option value="DEP ED SDO">DEP ED SDO</option>
        <option value="DEPARTMENT OF AGRARIAN REFORM">
          DEPARTMENT OF AGRARIAN REFORM
        </option>
        <option value="DEPARTMENT OF AGRICULTURE">
          DEPARTMENT OF AGRICULTURE
        </option>
        <option value="DEPARTMENT OF BUDGET AND MANAGEMENT">
          DEPARTMENT OF BUDGET AND MANAGEMENT
        </option>
        <option value="Department of Education">Department of Education</option>
        <option value="DEPARTMENT OF EDUCATION Division of Marinduque">
          DEPARTMENT OF EDUCATION Division of Marinduque
        </option>
        <option value="DEPARTMENT OF ENERGY">DEPARTMENT OF ENERGY</option>
        <option value="DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES">
          DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES
        </option>
        <option value="DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES, REGION 10">
          DEPARTMENT OF ENVIRONMENT AND NATURAL RESOURCES, REGION 10
        </option>
        <option value="DEPARTMENT OF FINANCE">DEPARTMENT OF FINANCE</option>
        <option value="DEPARTMENT OF FOREIGN AFFAIRS">
          DEPARTMENT OF FOREIGN AFFAIRS
        </option>
        <option value="DEPARTMENT OF HEALTH">DEPARTMENT OF HEALTH</option>
        <option value="DEPARTMENT OF HUMAN SETTLEMENTS AND URBAN DEVELOPMENT">
          DEPARTMENT OF HUMAN SETTLEMENTS AND URBAN DEVELOPMENT
        </option>
        <option value="DEPARTMENT OF INFORMATION AND COMMUNICATION TECHNOLOGY">
          DEPARTMENT OF INFORMATION AND COMMUNICATION TECHNOLOGY
        </option>
        <option value="Department of Interior and Local Government">
          Department of Interior and Local Government
        </option>
        <option value="DEPARTMENT OF JUSTICE">DEPARTMENT OF JUSTICE</option>
        <option value="DEPARTMENT OF LABOR AND EMPLOYMENT">
          DEPARTMENT OF LABOR AND EMPLOYMENT
        </option>
        <option value="DEPARTMENT OF MIGRANT WORKERS">
          DEPARTMENT OF MIGRANT WORKERS
        </option>
        <option value="DEPARTMENT OF NATIONAL DEFENSE">
          DEPARTMENT OF NATIONAL DEFENSE
        </option>
        <option value="DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS">
          DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS
        </option>
        <option value="DEPARTMENT OF SCIENCE AND TECHNOLOGY">
          DEPARTMENT OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT">
          DEPARTMENT OF SOCIAL WELFARE AND DEVELOPMENT
        </option>
        <option value="DEPARTMENT OF THE INTERIOR AND LOCAL GOVERNMENT">
          DEPARTMENT OF THE INTERIOR AND LOCAL GOVERNMENT
        </option>
        <option value="DEPARTMENT OF TOURISM">DEPARTMENT OF TOURISM</option>
        <option value="DEPARTMENT OF TRADE AND INDUSTRY">
          DEPARTMENT OF TRADE AND INDUSTRY
        </option>
        <option value="DEPARTMENT OF TRANSPORTATION">
          DEPARTMENT OF TRANSPORTATION
        </option>
        <option value="Design Center of the Philippines">
          Design Center of the Philippines
        </option>
        <option value="DEVELOPMENT ACADEMY OF THE BANGSAMORO">
          DEVELOPMENT ACADEMY OF THE BANGSAMORO
        </option>
        <option value="DEVELOPMENT ACADEMY OF THE PHILIPPINES">
          DEVELOPMENT ACADEMY OF THE PHILIPPINES
        </option>
        <option value="DEVELOPMENT BANK OF THE PHILIPPINES">
          DEVELOPMENT BANK OF THE PHILIPPINES
        </option>
        <option value="DIADI WATER DISTRICT">DIADI WATER DISTRICT</option>
        <option value="DIGOS WATER DISTRICT">DIGOS WATER DISTRICT</option>
        <option value="DINALUPIHAN WATER DISTRICT">
          DINALUPIHAN WATER DISTRICT
        </option>
        <option value="DIPOLOG CITY WATER DISTRICT">
          DIPOLOG CITY WATER DISTRICT
        </option>
        <option value="DOH - TREATMENT AND REHABILITATION CENTER">
          DOH - TREATMENT AND REHABILITATION CENTER
        </option>
        <option value="DON CARLOS WATER DISTRICT">
          DON CARLOS WATER DISTRICT
        </option>
        <option value="DON EMILIO DEL VALLE MEMORIAL HOSPITAL">
          DON EMILIO DEL VALLE MEMORIAL HOSPITAL
        </option>
        <option value="DON HONORIO VENTURA TECHNOLOGICAL STATE UNIVERSITY">
          DON HONORIO VENTURA TECHNOLOGICAL STATE UNIVERSITY
        </option>
        <option value="DON JOSE S. MONFORT MEDICAL CENTER">
          DON JOSE S. MONFORT MEDICAL CENTER
        </option>
        <option value="DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY">
          DON MARIANO MARCOS MEMORIAL STATE UNIVERSITY
        </option>
        <option value="DR. EMILIO B. ESPINOSA SR. MEMORIAL STATE COLLEGE OF AGRICULTURE AND  TECHNOLOGY">
          DR. EMILIO B. ESPINOSA SR. MEMORIAL STATE COLLEGE OF AGRICULTURE AND
          TECHNOLOGY
        </option>
        <option value="DR. JOSE N. RODRIGUEZ MEMORIAL HOSPITAL">
          DR. JOSE N. RODRIGUEZ MEMORIAL HOSPITAL
        </option>
        <option value="DR. PAULINO J. GARCIA MEMORIAL RESEARCH AND MEDICAL CENTER">
          DR. PAULINO J. GARCIA MEMORIAL RESEARCH AND MEDICAL CENTER
        </option>
        <option value="DUTY FREE PHILIPPINES CORPORATION">
          DUTY FREE PHILIPPINES CORPORATION
        </option>
        <option value="EAST AVENUE MEDICAL CENTER">
          EAST AVENUE MEDICAL CENTER
        </option>
        <option value="EASTERN SAMAR STATE UNIVERSITY">
          EASTERN SAMAR STATE UNIVERSITY
        </option>
        <option value="EASTERN VISAYAS REGIONAL MEDICAL CENTER">
          EASTERN VISAYAS REGIONAL MEDICAL CENTER
        </option>
        <option value="EASTERN VISAYAS STATE UNIVERSITY">
          EASTERN VISAYAS STATE UNIVERSITY
        </option>
        <option value="ENERGY REGULATORY COMMISSION">
          ENERGY REGULATORY COMMISSION
        </option>
        <option value="ENVIRONMENTAL MANAGEMENT BUREAU">
          ENVIRONMENTAL MANAGEMENT BUREAU
        </option>
        <option value="ESCALANTE WATER DISTRICT">
          ESCALANTE WATER DISTRICT
        </option>
        <option value="EULOGIO ?AMANG? RODRIGUEZ INSTITUTE OF TECHNOLOGY">
          EULOGIO ?AMANG? RODRIGUEZ INSTITUTE OF TECHNOLOGY
        </option>
        <option value="EULOGIO AMANG RODRIGUEZ INSTITUTE OF TECHNOLOGY">
          EULOGIO AMANG RODRIGUEZ INSTITUTE OF TECHNOLOGY
        </option>
        <option value="EVERSLEY CHILDS SANITARIUM AND GENERAL HOSPITAL">
          EVERSLEY CHILDS SANITARIUM AND GENERAL HOSPITAL
        </option>
        <option value="FAR NORTH LUZON GENERAL HOSPITAL">
          FAR NORTH LUZON GENERAL HOSPITAL
        </option>
        <option value="FERTILIZER AND PESTICIDE AUTHORITY">
          FERTILIZER AND PESTICIDE AUTHORITY
        </option>
        <option value="FOOD AND DRUG ADMINISTRATION">
          FOOD AND DRUG ADMINISTRATION
        </option>
        <option value="FOOD AND NUTRITION RESEARCH INSTITUTE">
          FOOD AND NUTRITION RESEARCH INSTITUTE
        </option>
        <option value="FOREIGN SERVICE INSTITUTE">
          FOREIGN SERVICE INSTITUTE
        </option>
        <option value="FOREST MANAGEMENT BUREAU">
          FOREST MANAGEMENT BUREAU
        </option>
        <option value="Forest Products Research and Development Institute">
          Forest Products Research and Development Institute
        </option>
        <option value="GAMES AND AMUSEMENTS BOARD">
          GAMES AND AMUSEMENTS BOARD
        </option>
        <option value="GEN. E. AGUINALDO WATER DISTRICT">
          GEN. E. AGUINALDO WATER DISTRICT
        </option>
        <option value="GEN. SANTOS CITY WATER DISTRICT">
          GEN. SANTOS CITY WATER DISTRICT
        </option>
        <option value="GINGOOG CITY WATER DISTRICT">
          GINGOOG CITY WATER DISTRICT
        </option>
        <option value="GONZAGA WATER DISTRICT">GONZAGA WATER DISTRICT</option>
        <option value="GOV. CELESTINO GALLARES MEMORIAL HOSPITAL">
          GOV. CELESTINO GALLARES MEMORIAL HOSPITAL
        </option>
        <option value="GOV. CELESTINO GALLARES MULTI-SPECIALTY MEDICAL CENTER">
          GOV. CELESTINO GALLARES MULTI-SPECIALTY MEDICAL CENTER
        </option>
        <option value="GOVERNANCE COMMISSION FOR GOCCS">
          GOVERNANCE COMMISSION FOR GOCCS
        </option>
        <option value="GOVERNMENT ARSENAL">GOVERNMENT ARSENAL</option>
        <option value="GOVERNMENT PROCUREMENT POLICY BOARD">
          GOVERNMENT PROCUREMENT POLICY BOARD
        </option>
        <option value="GOVERNMENT SERVICE INSURANCE SYSTEM">
          GOVERNMENT SERVICE INSURANCE SYSTEM
        </option>
        <option value="GOVERNOR BENJAMIN T. ROMUALDEZ GENERAL HOSPITAL AND SCHISTOSOMIASIS CENTER">
          GOVERNOR BENJAMIN T. ROMUALDEZ GENERAL HOSPITAL AND SCHISTOSOMIASIS
          CENTER
        </option>
        <option value="GUIMBA WATER DISTRICT">GUIMBA WATER DISTRICT</option>
        <option value="Gumaca Water District">Gumaca Water District</option>
        <option value="HAGONOY WATER DISTRICT">HAGONOY WATER DISTRICT</option>
        <option value="HINATUAN WATER DISTRICT">HINATUAN WATER DISTRICT</option>
        <option value="HOME DEVELOPMENT MUTUAL FUND">
          HOME DEVELOPMENT MUTUAL FUND
        </option>
        <option value="HOUSE OF REPRESENTATIVES">
          HOUSE OF REPRESENTATIVES
        </option>
        <option value="HUMAN RIGHTS VIOLATIONS VICTIMS MEMORIAL COMMISSION">
          HUMAN RIGHTS VIOLATIONS VICTIMS MEMORIAL COMMISSION
        </option>
        <option value="HUMAN SETTLEMENTS ADJUDICATION COMMISSION">
          HUMAN SETTLEMENTS ADJUDICATION COMMISSION
        </option>
        <option value="IFUGAO STATE UNIVERSITY">IFUGAO STATE UNIVERSITY</option>
        <option value="ILOCOS SUR POLYTECHNIC STATE COLLEGE">
          ILOCOS SUR POLYTECHNIC STATE COLLEGE
        </option>
        <option value="ILOILO SCIENCE AND TECHNOLOGY UNIVERSITY">
          ILOILO SCIENCE AND TECHNOLOGY UNIVERSITY
        </option>
        <option value="INDANG WATER DISTRICT">INDANG WATER DISTRICT</option>
        <option value="INDUSTRIAL TECHNOLOGY DEVELOPMENT INSTITUTE">
          INDUSTRIAL TECHNOLOGY DEVELOPMENT INSTITUTE
        </option>
        <option value="INFANTA-GEN. NAKAR WATER DISTRICT">
          INFANTA-GEN. NAKAR WATER DISTRICT
        </option>
        <option value="INSTITUTE FOR LABOR STUDIES">
          INSTITUTE FOR LABOR STUDIES
        </option>
        <option value="Insurance Commission">Insurance Commission</option>
        <option value="INTELLECTUAL PROPERTY OFFICE">
          INTELLECTUAL PROPERTY OFFICE
        </option>
        <option value="INTRAMUROS ADMINISTRATION">
          INTRAMUROS ADMINISTRATION
        </option>
        <option value="ISABEL WATER DISTRICT">ISABEL WATER DISTRICT</option>
        <option value="ISABELA STATE UNIVERSITY">
          ISABELA STATE UNIVERSITY
        </option>
        <option value="JOLO MAINLAND WATER DISTRICT">
          JOLO MAINLAND WATER DISTRICT
        </option>
        <option value="JOSE B. LINGAD MEMORIAL GENERAL HOSPITAL">
          JOSE B. LINGAD MEMORIAL GENERAL HOSPITAL
        </option>
        <option value="JOSE FABELLA MEMORIAL MEDICAL CENTER">
          JOSE FABELLA MEMORIAL MEDICAL CENTER
        </option>
        <option value="JOSE REYES MEMORIAL MEDICAL CENTER">
          JOSE REYES MEMORIAL MEDICAL CENTER
        </option>
        <option value="JOSE RIZAL MEMORIAL STATE UNIVERSITY-DAPITAN CITY">
          JOSE RIZAL MEMORIAL STATE UNIVERSITY-DAPITAN CITY
        </option>
        <option value="JOSEFINA H. CERILLES STATE COLLEGE">
          JOSEFINA H. CERILLES STATE COLLEGE
        </option>
        <option value="JUVENILE JUSTICE AND WELFARE COUNCIL">
          JUVENILE JUSTICE AND WELFARE COUNCIL
        </option>
        <option value="KABACAN WATER DISTRICT">KABACAN WATER DISTRICT</option>
        <option value="KALINGA STATE UNIVERSITY">
          KALINGA STATE UNIVERSITY
        </option>
        <option value="LA CARLOTA CITY COLLEGE">LA CARLOTA CITY COLLEGE</option>
        <option value="LA CARLOTA CITY WATER DISTRICT">
          LA CARLOTA CITY WATER DISTRICT
        </option>
        <option value="LAGUNA LAKE DEVELOPMENT AUTHORITY">
          LAGUNA LAKE DEVELOPMENT AUTHORITY
        </option>
        <option value="LAGUNA STATE POLYTECHNIC UNIVERSITY">
          LAGUNA STATE POLYTECHNIC UNIVERSITY
        </option>
        <option value="LAGUNA WATER DISTRICT">LAGUNA WATER DISTRICT</option>
        <option value="LAMITAN CITY WATER DISTRICT">
          LAMITAN CITY WATER DISTRICT
        </option>
        <option value="LAND BANK OF THE PHILIPPINES">
          LAND BANK OF THE PHILIPPINES
        </option>
        <option value="LAND REGISTRATION AUTHORITY">
          LAND REGISTRATION AUTHORITY
        </option>
        <option value="LAND TRANSPORTATION FRANCHISING AND REGULATORY BOARD">
          LAND TRANSPORTATION FRANCHISING AND REGULATORY BOARD
        </option>
        <option value="LAND TRANSPORTATION OFFICE">
          LAND TRANSPORTATION OFFICE
        </option>
        <option value="LAND TRANSPORTATION OFFICE - NATIONAL CAPITAL REGION">
          LAND TRANSPORTATION OFFICE - NATIONAL CAPITAL REGION
        </option>
        <option value="LAS PIÑAS GENERAL HOSPITAL AND SATELLITE TRAUMA CENTER">
          LAS PIÑAS GENERAL HOSPITAL AND SATELLITE TRAUMA CENTER
        </option>
        <option value="LEBAK WATER DISTRICT">LEBAK WATER DISTRICT</option>
        <option value="LEGAZPI CITY WATER DISTRICT">
          LEGAZPI CITY WATER DISTRICT
        </option>
        <option value="LEYTE NORMAL UNIVERSITY">LEYTE NORMAL UNIVERSITY</option>
        <option value="LGU-Carmen, Cotabato">LGU-Carmen, Cotabato</option>
        <option value="LGU-GAMU, ISABELA">LGU-GAMU, ISABELA</option>
        <option value="LGU-PADRE BURGOS, SOUTHERN LEYTE">
          LGU-PADRE BURGOS, SOUTHERN LEYTE
        </option>
        <option value="LIBMANAN WATER DISTRICT">LIBMANAN WATER DISTRICT</option>
        <option value="LIGHT RAIL TRANSIT AUTHORITY">
          LIGHT RAIL TRANSIT AUTHORITY
        </option>
        <option value="LILOY WATER DISTRICT">LILOY WATER DISTRICT</option>
        <option value="LIMAY WATER DISTRICT">LIMAY WATER DISTRICT</option>
        <option value="LOCAL GOVERNMENT UNIT OF LUNA, ISABELA">
          LOCAL GOVERNMENT UNIT OF LUNA, ISABELA
        </option>
        <option value="LOCAL GOVERNMENT UNIT OF MIDSAYAP">
          LOCAL GOVERNMENT UNIT OF MIDSAYAP
        </option>
        <option value="LOCAL WATER UTILITIES ADMINISTRATION">
          LOCAL WATER UTILITIES ADMINISTRATION
        </option>
        <option value="LUIS HORA MEMORIAL REGIONAL HOSPITAL">
          LUIS HORA MEMORIAL REGIONAL HOSPITAL
        </option>
        <option value="LUNG CENTER OF THE PHILIPPINES">
          LUNG CENTER OF THE PHILIPPINES
        </option>
        <option value="MLANG WATER DISTRICT">MLANG WATER DISTRICT</option>
        <option value="MACALELON WATER DISTRICT">
          MACALELON WATER DISTRICT
        </option>
        <option value="MALAY WATER DISTRICT">MALAY WATER DISTRICT</option>
        <option value="MALINAO TREATMENT AND REHABILITATION CENTER">
          MALINAO TREATMENT AND REHABILITATION CENTER
        </option>
        <option value="MALUSO WATER DISTRICT">MALUSO WATER DISTRICT</option>
        <option value="MANAOAG WATER DISTRICT">MANAOAG WATER DISTRICT</option>
        <option value="MANGALDAN WATER DISTRICT">
          MANGALDAN WATER DISTRICT
        </option>
        <option value="MANILA, NCR">MANILA, NCR</option>
        <option value="MANOLO FORTICH WATER DISTRICT">
          MANOLO FORTICH WATER DISTRICT
        </option>
        <option value="MARAMAG WATER DISTRICT">MARAMAG WATER DISTRICT</option>
        <option value="MARIANO MARCOS MEMORIAL HOSPITAL AND MEDICAL CENTER">
          MARIANO MARCOS MEMORIAL HOSPITAL AND MEDICAL CENTER
        </option>
        <option value="MARIANO MARCOS STATE UNIVERSITY">
          MARIANO MARCOS STATE UNIVERSITY
        </option>
        <option value="MARINDUQUE STATE COLLEGE">
          MARINDUQUE STATE COLLEGE
        </option>
        <option value="MARITIME INDUSTRY AUTHORITY">
          MARITIME INDUSTRY AUTHORITY
        </option>
        <option value="MARIVELES MENTAL WELLNESS AND GENERAL HOSPITAL">
          MARIVELES MENTAL WELLNESS AND GENERAL HOSPITAL
        </option>
        <option value="METALS INDUSTRY RESEARCH AND DEVELOPMENT CENTER">
          METALS INDUSTRY RESEARCH AND DEVELOPMENT CENTER
        </option>
        <option value="METRO BANGUED WATER DISTRICT">
          METRO BANGUED WATER DISTRICT
        </option>
        <option value="METRO CARIGARA WATER DISTRICT">
          METRO CARIGARA WATER DISTRICT
        </option>
        <option value="METRO CEBU WATER DISTRICT">
          METRO CEBU WATER DISTRICT
        </option>
        <option value="METRO COTABATO WATER DISTRICT">
          METRO COTABATO WATER DISTRICT
        </option>
        <option value="METRO KALIBO WATER DISTRICT">
          METRO KALIBO WATER DISTRICT
        </option>
        <option value="METRO KIDAPAWAN WATER DISTRICT">
          METRO KIDAPAWAN WATER DISTRICT
        </option>
        <option value="METRO LA UNION WATER DISTRICT">
          METRO LA UNION WATER DISTRICT
        </option>
        <option value="METRO LIPA WATER DISTRICT">
          METRO LIPA WATER DISTRICT
        </option>
        <option value="METRO ROXAS WATER DISTRICT">
          METRO ROXAS WATER DISTRICT
        </option>
        <option value="METRO VIGAN WATER DISTRICT">
          METRO VIGAN WATER DISTRICT
        </option>
        <option value="Metropolitan Manila Development Authority">
          Metropolitan Manila Development Authority
        </option>
        <option value="METROPOLITAN TUGUEGARAO WATER DISTRICT">
          METROPOLITAN TUGUEGARAO WATER DISTRICT
        </option>
        <option value="METROPOLITAN WATERWORKS AND SEWERAGE SYSTEM">
          METROPOLITAN WATERWORKS AND SEWERAGE SYSTEM
        </option>
        <option value="Metropolitan Waterworks and Sewerage System Regulatory Office">
          Metropolitan Waterworks and Sewerage System Regulatory Office
        </option>
        <option value="MEYCAUAYAN WATER DISTRICT">
          MEYCAUAYAN WATER DISTRICT
        </option>
        <option value="MGO - CARDONA, RIZAL">MGO - CARDONA, RIZAL</option>
        <option value="MGO ABORLAN, PALAWAN">MGO ABORLAN, PALAWAN</option>
        <option value="MGO ABUCAY, BATAAN">MGO ABUCAY, BATAAN</option>
        <option value="MGO ABUYOG, LEYTE">MGO ABUYOG, LEYTE</option>
        <option value="MGO ADAMS">MGO ADAMS</option>
        <option value="MGO AGLIPAY, QUIRINO">MGO AGLIPAY, QUIRINO</option>
        <option value="MGO AGNO, PANGASINAN">MGO AGNO, PANGASINAN</option>
        <option value="MGO AGONCILLO, BATANGAS">MGO AGONCILLO, BATANGAS</option>
        <option value="MGO AGUILAR, PANGASINAN">MGO AGUILAR, PANGASINAN</option>
        <option value="MGO AGUINALDO, IFUGAO">MGO AGUINALDO, IFUGAO</option>
        <option value="MGO AKBAR, BASILAN">MGO AKBAR, BASILAN</option>
        <option value="MGO AL-BARKA, BASILAN">MGO AL-BARKA, BASILAN</option>
        <option value="MGO ALABAT, QUEZON">MGO ALABAT, QUEZON</option>
        <option value="MGO ALABEL (CAPITAL), SARANGANI">
          MGO ALABEL (CAPITAL), SARANGANI
        </option>
        <option value="MGO ALAMINOS, LAGUNA">MGO ALAMINOS, LAGUNA</option>
        <option value="MGO ALANGALANG, LEYTE">MGO ALANGALANG, LEYTE</option>
        <option value="MGO ALBUERA, LEYTE">MGO ALBUERA, LEYTE</option>
        <option value="MGO ALCANTARA, CEBU">MGO ALCANTARA, CEBU</option>
        <option value="MGO ALCANTARA, ROMBLON">MGO ALCANTARA, ROMBLON</option>
        <option value="MGO ALCOY, CEBU">MGO ALCOY, CEBU</option>
        <option value="MGO ALEGRIA, CEBU">MGO ALEGRIA, CEBU</option>
        <option value="MGO ALEGRIA, SURIGAO DEL NORTE">
          MGO ALEGRIA, SURIGAO DEL NORTE
        </option>
        <option value="MGO ALEOSAN, NORTH COTABATO">
          MGO ALEOSAN, NORTH COTABATO
        </option>
        <option value="MGO ALFONSO CASTANEDA, NUEVA VIZCAYA">
          MGO ALFONSO CASTANEDA, NUEVA VIZCAYA
        </option>
        <option value="MGO ALFONSO LISTA (POTIA), IFUGAO">
          MGO ALFONSO LISTA (POTIA), IFUGAO
        </option>
        <option value="MGO ALFONSO, CAVITE">MGO ALFONSO, CAVITE</option>
        <option value="MGO ALIAGA, NUEVA ECIJA">MGO ALIAGA, NUEVA ECIJA</option>
        <option value="MGO ALICIA, BOHOL">MGO ALICIA, BOHOL</option>
        <option value="MGO ALICIA, ISABELA">MGO ALICIA, ISABELA</option>
        <option value="MGO ALILEM, ILOCOR SUR">MGO ALILEM, ILOCOR SUR</option>
        <option value="MGO ALITAGTAG, BATANGAS">MGO ALITAGTAG, BATANGAS</option>
        <option value="MGO ALLACAPAN, CAGAYAN">MGO ALLACAPAN, CAGAYAN</option>
        <option value="MGO ALMAGRO, SAMAR (WESTERN)">
          MGO ALMAGRO, SAMAR (WESTERN)
        </option>
        <option value="MGO ALOGUINSAN, CEBU">MGO ALOGUINSAN, CEBU</option>
        <option value="MGO Aloran, Misamis Occidental">
          MGO Aloran, Misamis Occidental
        </option>
        <option value="MGO ALTAVAS, AKLAN">MGO ALTAVAS, AKLAN</option>
        <option value="MGO ALUBIJID, MISAMIS ORIENTAL">
          MGO ALUBIJID, MISAMIS ORIENTAL
        </option>
        <option value="MGO AMADEO, CAVITE">MGO AMADEO, CAVITE</option>
        <option value="MGO AMBAGUIO, NUEVA VIZCAYA">
          MGO AMBAGUIO, NUEVA VIZCAYA
        </option>
        <option value="MGO AMULUNG, CAGAYAN">MGO AMULUNG, CAGAYAN</option>
        <option value="MGO ANAO, TARLAC">MGO ANAO, TARLAC</option>
        <option value="MGO ANDA, PANGASINAN">MGO ANDA, PANGASINAN</option>
        <option value="MGO ANGADANAN, ISABELA">MGO ANGADANAN, ISABELA</option>
        <option value="MGO ANGAT, BULACAN">MGO ANGAT, BULACAN</option>
        <option value="MGO ANGONO, RIZAL">MGO ANGONO, RIZAL</option>
        <option value="MGO ANILAO, ILOILO">MGO ANILAO, ILOILO</option>
        <option value="MGO ANINI-Y, ANTIQUE">MGO ANINI-Y, ANTIQUE</option>
        <option value="MGO ANTEQUERA, BOHOL">MGO ANTEQUERA, BOHOL</option>
        <option value="MGO APALIT, PAMPANGA">MGO APALIT, PAMPANGA</option>
        <option value="MGO APARRI, CAGAYAN">MGO APARRI, CAGAYAN</option>
        <option value="MGO ARACELI, PALAWAN">MGO ARACELI, PALAWAN</option>
        <option value="MGO ARAKAN, NORTH COTABATO">
          MGO ARAKAN, NORTH COTABATO
        </option>
        <option value="MGO ARAYAT, PAMPANGA">MGO ARAYAT, PAMPANGA</option>
        <option value="MGO ARGAO, CEBU">MGO ARGAO, CEBU</option>
        <option value="MGO ARINGAY, LA UNION">MGO ARINGAY, LA UNION</option>
        <option value="MGO AROROY, MASBATE">MGO AROROY, MASBATE</option>
        <option value="MGO ARTECHE, EASTERN SAMAR">
          MGO ARTECHE, EASTERN SAMAR
        </option>
        <option value="MGO ASINGAN, PANGASINAN">MGO ASINGAN, PANGASINAN</option>
        <option value="MGO ASTURIAS, CEBU">MGO ASTURIAS, CEBU</option>
        <option value="MGO ASUNCION (SAUG),DAVAO DEL NORTE">
          MGO ASUNCION (SAUG),DAVAO DEL NORTE
        </option>
        <option value="MGO ATIMONAN, QUEZON">MGO ATIMONAN, QUEZON</option>
        <option value="MGO ATOK, BENGUET">MGO ATOK, BENGUET</option>
        <option value="MGO AURORA, ISABELA">MGO AURORA, ISABELA</option>
        <option value="MGO AURORA, ZAMBOANGA DEL SUR">
          MGO AURORA, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO AYUNGON, NEGROS ORIENTAL">
          MGO AYUNGON, NEGROS ORIENTAL
        </option>
        <option value="MGO BABATNGON, LEYTE">MGO BABATNGON, LEYTE</option>
        <option value="MGO BACARRA, ILOCOS NORTE">
          MGO BACARRA, ILOCOS NORTE
        </option>
        <option value="MGO BACLAYON, BOHOL">MGO BACLAYON, BOHOL</option>
        <option value="MGO BACNOTAN, LA UNION">MGO BACNOTAN, LA UNION</option>
        <option value="MGO BACO, ORIENTAL MINDORO">
          MGO BACO, ORIENTAL MINDORO
        </option>
        <option value="MGO BACOLOD, LANAO DEL NORTE">
          MGO BACOLOD, LANAO DEL NORTE
        </option>
        <option value="MGO BACOLOR, PAMPANGA">MGO BACOLOR, PAMPANGA</option>
        <option value="MGO BACUAG, SURIGAO DEL NORTE">
          MGO BACUAG, SURIGAO DEL NORTE
        </option>
        <option value="MGO BADIAN, CEBU">MGO BADIAN, CEBU</option>
        <option value="MGO BADIANGAN, ILOILO">MGO BADIANGAN, ILOILO</option>
        <option value="MGO BADOC, ILOCOS NORTE">MGO BADOC, ILOCOS NORTE</option>
        <option value="MGO BAGABAG, NUEVA VIZCAYA">
          MGO BAGABAG, NUEVA VIZCAYA
        </option>
        <option value="MGO BAGAMANOC, CATANDUANES">
          MGO BAGAMANOC, CATANDUANES
        </option>
        <option value="MGO BAGANGA, DAVAO ORIENTAL">
          MGO BAGANGA, DAVAO ORIENTAL
        </option>
        <option value="MGO BAGGAO, CAGAYAN">MGO BAGGAO, CAGAYAN</option>
        <option value="MGO BAGUMBAYAN, SULTAN KUDARAT">
          MGO BAGUMBAYAN, SULTAN KUDARAT
        </option>
        <option value="MGO BAKUN, BENGUET">MGO BAKUN, BENGUET</option>
        <option value="MGO BALABAC, PALAWAN">MGO BALABAC, PALAWAN</option>
        <option value="MGO BALABAGAN, LANAO DEL SUR">
          MGO BALABAGAN, LANAO DEL SUR
        </option>
        <option value="MGO BALAGTAS (BIGAA), BULACAN">
          MGO BALAGTAS (BIGAA), BULACAN
        </option>
        <option value="MGO BALAMBAN, CEBU">MGO BALAMBAN, CEBU</option>
        <option value="MGO BALANGKAYAN, EASTERN SAMAR">
          MGO BALANGKAYAN, EASTERN SAMAR
        </option>
        <option value="MGO BALAOAN, LA UNION">MGO BALAOAN, LA UNION</option>
        <option value="MGO BALASAN, ILOILO">MGO BALASAN, ILOILO</option>
        <option value="MGO BALATAN, CAMARINES SUR">
          MGO BALATAN, CAMARINES SUR
        </option>
        <option value="MGO BALAYAN, BATANGAS">MGO BALAYAN, BATANGAS</option>
        <option value="MGO BALBALAN, KALINGA">MGO BALBALAN, KALINGA</option>
        <option value="MGO BALENO, MASBATE">MGO BALENO, MASBATE</option>
        <option value="MGO BALER , AURORA">MGO BALER , AURORA</option>
        <option value="MGO BALETE, AKLAN">MGO BALETE, AKLAN</option>
        <option value="MGO BALETE, BATANGAS">MGO BALETE, BATANGAS</option>
        <option value="MGO BALIANGAO, MISAMIS OCCIDENTAL">
          MGO BALIANGAO, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO BALIGUIAN, ZAMBOANGA DEL NORTE">
          MGO BALIGUIAN, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO BALINDONG (WATU), LANAO DEL SUR">
          MGO BALINDONG (WATU), LANAO DEL SUR
        </option>
        <option value="MGO BALINGASAG, MISAMIS ORIENTAL">
          MGO BALINGASAG, MISAMIS ORIENTAL
        </option>
        <option value="MGO BALINGOAN, MISAMIS ORIENTAL">
          MGO BALINGOAN, MISAMIS ORIENTAL
        </option>
        <option value="MGO BALIUAG, BULACAN">MGO BALIUAG, BULACAN</option>
        <option value="MGO BALLESTEROS, CAGAYAN">
          MGO BALLESTEROS, CAGAYAN
        </option>
        <option value="MGO BALOI, LANAO DEL NORTE">
          MGO BALOI, LANAO DEL NORTE
        </option>
        <option value="MGO BALUD, MASBATE">MGO BALUD, MASBATE</option>
        <option value="MGO BALUNGAO, PANGASINAN">
          MGO BALUNGAO, PANGASINAN
        </option>
        <option value="MGO BAMBAN, TARLAC">MGO BAMBAN, TARLAC</option>
        <option value="MGO BANATE, ILOILO">MGO BANATE, ILOILO</option>
        <option value="MGO BANAYBANAY, DAVAO ORIENTAL">
          MGO BANAYBANAY, DAVAO ORIENTAL
        </option>
        <option value="MGO BANAYOYO, ILOCOS SUR">
          MGO BANAYOYO, ILOCOS SUR
        </option>
        <option value="MGO BANGA, AKLAN">MGO BANGA, AKLAN</option>
        <option value="MGO BANGAR, LA UNION">MGO BANGAR, LA UNION</option>
        <option value="MGO BANGUED (CAPITAL), ABRA">
          MGO BANGUED (CAPITAL), ABRA
        </option>
        <option value="MGO BANGUI, ILOCOS NORTE">
          MGO BANGUI, ILOCOS NORTE
        </option>
        <option value="MGO BANI, PANGASINAN">MGO BANI, PANGASINAN</option>
        <option value="MGO BANISILAN, NORTH COTABATO">
          MGO BANISILAN, NORTH COTABATO
        </option>
        <option value="MGO BANNA (ESPIRITU), ILOCOS NORTE">
          MGO BANNA (ESPIRITU), ILOCOS NORTE
        </option>
        <option value="MGO BANSALAN, DAVAO DEL SUR">
          MGO BANSALAN, DAVAO DEL SUR
        </option>
        <option value="MGO BANSUD, ORIENTAL MINDORO">
          MGO BANSUD, ORIENTAL MINDORO
        </option>
        <option value="MGO BANTAY, ILOCOS SUR">MGO BANTAY, ILOCOS SUR</option>
        <option value="MGO BANTAYAN, CEBU">MGO BANTAYAN, CEBU</option>
        <option value="MGO BARAS, CATANDUANES">MGO BARAS, CATANDUANES</option>
        <option value="MGO BARBAZA, ANTIQUE">MGO BARBAZA, ANTIQUE</option>
        <option value="MGO BARILI, CEBU">MGO BARILI, CEBU</option>
        <option value="MGO BARIRA, MAGUINDANAO">MGO BARIRA, MAGUINDANAO</option>
        <option value="MGO BARLIG, MOUNTAIN PROVINCE">
          MGO BARLIG, MOUNTAIN PROVINCE
        </option>
        <option value="MGO BAROBO, SURIGAO DEL SUR">
          MGO BAROBO, SURIGAO DEL SUR
        </option>
        <option value="MGO BAROTAC NUEVO, ILOILO">
          MGO BAROTAC NUEVO, ILOILO
        </option>
        <option value="MGO BARUGO, LEYTE">MGO BARUGO, LEYTE</option>
        <option value="MGO BASAY, NEGROS ORIENTAL">
          MGO BASAY, NEGROS ORIENTAL
        </option>
        <option value="MGO BASCO (CAPITAL), BATANES">
          MGO BASCO (CAPITAL), BATANES
        </option>
        <option value="MGO BASEY, SAMAR (WESTERN)">
          MGO BASEY, SAMAR (WESTERN)
        </option>
        <option value="MGO BASILISA (RIZAL), DINAGAT ISLAND">
          MGO BASILISA (RIZAL), DINAGAT ISLAND
        </option>
        <option value="MGO BASISTA, PANGASINAN">MGO BASISTA, PANGASINAN</option>
        <option value="MGO BASUD, CAMARINES NORTE">
          MGO BASUD, CAMARINES NORTE
        </option>
        <option value="MGO BATAD, ILOILO">MGO BATAD, ILOILO</option>
        <option value="MGO BATAN, AKLAN">MGO BATAN, AKLAN</option>
        <option value="MGO BATARAZA, PALAWAN">MGO BATARAZA, PALAWAN</option>
        <option value="MGO BATO, CAMARINES SUR">MGO BATO, CAMARINES SUR</option>
        <option value="MGO BATO, LEYTE">MGO BATO, LEYTE</option>
        <option value="MGO BATUAN, BOHOL">MGO BATUAN, BOHOL</option>
        <option value="MGO BATUAN, MASBATE">MGO BATUAN, MASBATE</option>
        <option value="MGO BAUAN, BATANGAS">MGO BAUAN, BATANGAS</option>
        <option value="MGO BAUANG, LA UNION">MGO BAUANG, LA UNION</option>
        <option value="MGO BAUKO, MOUNTAIN PROVINCE">
          MGO BAUKO, MOUNTAIN PROVINCE
        </option>
        <option value="MGO BAUNGON, BUKIDNON">MGO BAUNGON, BUKIDNON</option>
        <option value="MGO BAUTISTA, PANGASINAN">
          MGO BAUTISTA, PANGASINAN
        </option>
        <option value="MGO BAY, LAGUNA">MGO BAY, LAGUNA</option>
        <option value="MGO BAYABAS, SURIGAO DEL SUR">
          MGO BAYABAS, SURIGAO DEL SUR
        </option>
        <option value="MGO BAYAMBANG, PANGASINAN">
          MGO BAYAMBANG, PANGASINAN
        </option>
        <option value="MGO BAYOG, ZAMBOANGA DEL SUR">
          MGO BAYOG, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO BENITO SOLIVEN, ISABELA">
          MGO BENITO SOLIVEN, ISABELA
        </option>
        <option value="MGO BESAO, MOUNTAIN PROVINCE">
          MGO BESAO, MOUNTAIN PROVINCE
        </option>
        <option value="MGO BIEN UNIDO, BOHOL">MGO BIEN UNIDO, BOHOL</option>
        <option value="MGO BILAR, BOHOL">MGO BILAR, BOHOL</option>
        <option value="MGO BILIRAN, BILIRAN">MGO BILIRAN, BILIRAN</option>
        <option value="MGO BINALBAGAN, NEGROS OCCIDENTAL">
          MGO BINALBAGAN, NEGROS OCCIDENTAL
        </option>
        <option value="MGO BINALONAN, PANGASINAN">
          MGO BINALONAN, PANGASINAN
        </option>
        <option value="MGO BINDOY (PAYABON), NEGROS ORIENTAL">
          MGO BINDOY (PAYABON), NEGROS ORIENTAL
        </option>
        <option value="MGO BINGAWAN, ILOILO">MGO BINGAWAN, ILOILO</option>
        <option value="MGO BINIDAYAN, LANAO DEL SUR">
          MGO BINIDAYAN, LANAO DEL SUR
        </option>
        <option value="MGO BINMALEY, PANGASINAN">
          MGO BINMALEY, PANGASINAN
        </option>
        <option value="MGO BOAC (CAPITAL), MARINDUQUE">
          MGO BOAC (CAPITAL), MARINDUQUE
        </option>
        <option value="MGO BOBON, NORTHERN SAMAR">
          MGO BOBON, NORTHERN SAMAR
        </option>
        <option value="MGO BOCAUE, BULACAN">MGO BOCAUE, BULACAN</option>
        <option value="MGO BOKOD, BENGUET">MGO BOKOD, BENGUET</option>
        <option value="MGO BOLINAO, PANGASINAN">MGO BOLINAO, PANGASINAN</option>
        <option value="MGO BOLINEY, ABRA">MGO BOLINEY, ABRA</option>
        <option value="MGO BOLJOON, CEBU">MGO BOLJOON, CEBU</option>
        <option value="MGO BOMBON, CAMARINES SUR">
          MGO BOMBON, CAMARINES SUR
        </option>
        <option value="MGO BONGABON, NUEVA ECIJA">
          MGO BONGABON, NUEVA ECIJA
        </option>
        <option value="MGO BONGABONG, ORIENTAL MINDORO">
          MGO BONGABONG, ORIENTAL MINDORO
        </option>
        <option value="MGO BONGAO, TAWI-TAWI">MGO BONGAO, TAWI-TAWI</option>
        <option value="MGO BONIFACIO, MISAMIS OCCIDENTAL">
          MGO BONIFACIO, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO BONTOC (CAPITAL), MOUNTAIN PROVINCE">
          MGO BONTOC (CAPITAL), MOUNTAIN PROVINCE
        </option>
        <option value="MGO BONTOC, SOUTHERN LEYTE">
          MGO BONTOC, SOUTHERN LEYTE
        </option>
        <option value="MGO BORBON, CEBU">MGO BORBON, CEBU</option>
        <option value="MGO BOSTON, DAVAO ORIENTAL">
          MGO BOSTON, DAVAO ORIENTAL
        </option>
        <option value="MGO BOTOLAN, ZAMBALES">MGO BOTOLAN, ZAMBALES</option>
        <option value="MGO BRAULIO E DUJALI, DAVAO DEL NORTE">
          MGO BRAULIO E DUJALI, DAVAO DEL NORTE
        </option>
        <option value="MGO BROOKES POINT, PALAWAN">
          MGO BROOKES POINT, PALAWAN
        </option>
        <option value="MGO BUADIPOSO-BUNTONG, LANAO DEL SUR">
          MGO BUADIPOSO-BUNTONG, LANAO DEL SUR
        </option>
        <option value="MGO BUBONG, LANAO DEL SUR">
          MGO BUBONG, LANAO DEL SUR
        </option>
        <option value="MGO BUCAY, ABRA">MGO BUCAY, ABRA</option>
        <option value="MGO BUCLOC, ABRA">MGO BUCLOC, ABRA</option>
        <option value="MGO BUENAVISTA, AGUSAN DEL NORTE">
          MGO BUENAVISTA, AGUSAN DEL NORTE
        </option>
        <option value="MGO BUENAVISTA, BOHOL">MGO BUENAVISTA, BOHOL</option>
        <option value="MGO BUENAVISTA, GUIMARAS">
          MGO BUENAVISTA, GUIMARAS
        </option>
        <option value="MGO BUENAVISTA, MARINDUQUE">
          MGO BUENAVISTA, MARINDUQUE
        </option>
        <option value="MGO BUENAVISTA, QUEZON">MGO BUENAVISTA, QUEZON</option>
        <option value="MGO BUGALLON, PANGASINAN">
          MGO BUGALLON, PANGASINAN
        </option>
        <option value="MGO BUGASONG, ANTIQUE">MGO BUGASONG, ANTIQUE</option>
        <option value="MGO BUGUEY, CAGAYAN">MGO BUGUEY, CAGAYAN</option>
        <option value="MGO BUGUIAS, BENGUET">MGO BUGUIAS, BENGUET</option>
        <option value="MGO BULA, CAMARINES SUR">MGO BULA, CAMARINES SUR</option>
        <option value="MGO BULACAN, BULACAN">MGO BULACAN, BULACAN</option>
        <option value="MGO BULALACAO (SAN PEDRO), ORIENTAL MINDORO">
          MGO BULALACAO (SAN PEDRO), ORIENTAL MINDORO
        </option>
        <option value="MGO BULAN, SORSOGON">MGO BULAN, SORSOGON</option>
        <option value="MGO BULDON, MAGUINDANAO">MGO BULDON, MAGUINDANAO</option>
        <option value="MGO BULUAN, MAGUINDANAO">MGO BULUAN, MAGUINDANAO</option>
        <option value="MGO BUMBARAN, LANAO DEL SUR">
          MGO BUMBARAN, LANAO DEL SUR
        </option>
        <option value="MGO BUNAWAN, AGUSAN DEL SUR">
          MGO BUNAWAN, AGUSAN DEL SUR
        </option>
        <option value="MGO BURAUEN, LEYTE">MGO BURAUEN, LEYTE</option>
        <option value="MGO BURDEOS, QUEZON">MGO BURDEOS, QUEZON</option>
        <option value="MGO BURGOS, PANGASINAN">MGO BURGOS, PANGASINAN</option>
        <option value="MGO BURGOS, SURIGAO DEL NORTE">
          MGO BURGOS, SURIGAO DEL NORTE
        </option>
        <option value="MGO BURUANGA, AKLAN">MGO BURUANGA, AKLAN</option>
        <option value="MGO BUSTOS, BULACAN">MGO BUSTOS, BULACAN</option>
        <option value="MGO BUSUANGA, PALAWAN">MGO BUSUANGA, PALAWAN</option>
        <option value="MGO BUTIG, LANAO DEL SUR">
          MGO BUTIG, LANAO DEL SUR
        </option>
        <option value="MGO BUUG, ZAMBOANGA SIBUGAY">
          MGO BUUG, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO CABA, LA UNION">MGO CABA, LA UNION</option>
        <option value="MGO CABAGAN, ISABELA">MGO CABAGAN, ISABELA</option>
        <option value="MGO CABANGLASAN, BUKIDNON">
          MGO CABANGLASAN, BUKIDNON
        </option>
        <option value="MGO CABATUAN, ILOILO">MGO CABATUAN, ILOILO</option>
        <option value="MGO CABIAO, NUEVA ECIJA">MGO CABIAO, NUEVA ECIJA</option>
        <option value="MGO CABUCGAYAN, BILIRAN">MGO CABUCGAYAN, BILIRAN</option>
        <option value="MGO CABUYAO, LAGUNA">MGO CABUYAO, LAGUNA</option>
        <option value="MGO CAGAYANCILLO, PALAWAN">
          MGO CAGAYANCILLO, PALAWAN
        </option>
        <option value="MGO CAGDIANAO, DINAGAT ISLAND">
          MGO CAGDIANAO, DINAGAT ISLAND
        </option>
        <option value="MGO CAGWAIT, SURIGAO DEL SUR">
          MGO CAGWAIT, SURIGAO DEL SUR
        </option>
        <option value="MGO CAIBIRAN, BILIRAN">MGO CAIBIRAN, BILIRAN</option>
        <option value="MGO CAINTA, RIZAL">MGO CAINTA, RIZAL</option>
        <option value="MGO CAJIDIOCAN, ROMBLON">MGO CAJIDIOCAN, ROMBLON</option>
        <option value="MGO CALABANGA, CAMARINES SUR">
          MGO CALABANGA, CAMARINES SUR
        </option>
        <option value="MGO CALACA, BATANGAS">MGO CALACA, BATANGAS</option>
        <option value="MGO CALAMBA, MISAMIS OCCIDENTAL">
          MGO CALAMBA, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO CALANASAN (BAYAG), APAYAO">
          MGO CALANASAN (BAYAG), APAYAO
        </option>
        <option value="MGO CALAPE, BOHOL">MGO CALAPE, BOHOL</option>
        <option value="MGO CALASIAO, PANGASINAN">
          MGO CALASIAO, PANGASINAN
        </option>
        <option value="MGO CALATAGAN BATANGAS">MGO CALATAGAN BATANGAS</option>
        <option value="MGO CALATAGAN, BATANGAS">MGO CALATAGAN, BATANGAS</option>
        <option value="MGO CALATRAVA, NEGROS OCCIDENTAL">
          MGO CALATRAVA, NEGROS OCCIDENTAL
        </option>
        <option value="MGO CALAUAG, QUEZON">MGO CALAUAG, QUEZON</option>
        <option value="MGO CALAUAN, LAGUNA">MGO CALAUAN, LAGUNA</option>
        <option value="MGO CALAYAN, CAGAYAN">MGO CALAYAN, CAGAYAN</option>
        <option value="MGO CALBIGA, SAMAR (WESTERN)">
          MGO CALBIGA, SAMAR (WESTERN)
        </option>
        <option value="MGO CALINOG, ILOILO">MGO CALINOG, ILOILO</option>
        <option value="MGO CALINTAAN, OCCIDENTAL MINDORO">
          MGO CALINTAAN, OCCIDENTAL MINDORO
        </option>
        <option value="MGO CALUMPIT, BULACAN">MGO CALUMPIT, BULACAN</option>
        <option value="MGO CAMALANIUGAN, CAGAYAN">
          MGO CAMALANIUGAN, CAGAYAN
        </option>
        <option value="MGO CAMALIG, ALBAY">MGO CAMALIG, ALBAY</option>
        <option value="MGO CAMALIGAN, CAMARINES SUR">
          MGO CAMALIGAN, CAMARINES SUR
        </option>
        <option value="MGO CAMILING, TARLAC">MGO CAMILING, TARLAC</option>
        <option value="MGO CAN-AVID, EASTERN SAMAR">
          MGO CAN-AVID, EASTERN SAMAR
        </option>
        <option value="MGO CANDELARIA, QUEZON">MGO CANDELARIA, QUEZON</option>
        <option value="MGO CANTILAN, SURIGAO DEL SUR">
          MGO CANTILAN, SURIGAO DEL SUR
        </option>
        <option value="MGO CAOAYAN, ILOCOS SUR">MGO CAOAYAN, ILOCOS SUR</option>
        <option value="MGO CAPAS, TARLAC">MGO CAPAS, TARLAC</option>
        <option value="MGO CAPOOCAN, LEYTE">MGO CAPOOCAN, LEYTE</option>
        <option value="MGO CAPUL, NORTHERN SAMAR">
          MGO CAPUL, NORTHERN SAMAR
        </option>
        <option value="MGO CARAGA. DAVAO ORIENTAL">
          MGO CARAGA. DAVAO ORIENTAL
        </option>
        <option value="MGO CARAMOAN, CAMARINES SUR">
          MGO CARAMOAN, CAMARINES SUR
        </option>
        <option value="MGO CARAMORAN, CATANDUANES">
          MGO CARAMORAN, CATANDUANES
        </option>
        <option value="MGO CARASI, ILOCOS NORTE">
          MGO CARASI, ILOCOS NORTE
        </option>
        <option value="MGO CARLES, ILOILO">MGO CARLES, ILOILO</option>
        <option value="MGO CARMEN, AGUSAN DEL NORTE">
          MGO CARMEN, AGUSAN DEL NORTE
        </option>
        <option value="MGO CARMEN, BOHOL">MGO CARMEN, BOHOL</option>
        <option value="MGO CARMEN, SURIGAO DEL SUR">
          MGO CARMEN, SURIGAO DEL SUR
        </option>
        <option value="MGO CARMONA, CAVITE">MGO CARMONA, CAVITE</option>
        <option value="MGO CARRANGLAN, NUEVA ECIJA">
          MGO CARRANGLAN, NUEVA ECIJA
        </option>
        <option value="MGO CARRASCAL, SURIGAO DEL SUR">
          MGO CARRASCAL, SURIGAO DEL SUR
        </option>
        <option value="MGO CASIGURAN, SORSOGON">MGO CASIGURAN, SORSOGON</option>
        <option value="MGO CASTILLA, SORSOGON">MGO CASTILLA, SORSOGON</option>
        <option value="MGO CASTILLEJOS, ZAMBALES">
          MGO CASTILLEJOS, ZAMBALES
        </option>
        <option value="MGO CATAINGAN, MASBATE">MGO CATAINGAN, MASBATE</option>
        <option value="MGO CATANAUAN, QUEZON">MGO CATANAUAN, QUEZON</option>
        <option value="MGO CATARMAN (CAPITAL), NORTHERN SAMAR">
          MGO CATARMAN (CAPITAL), NORTHERN SAMAR
        </option>
        <option value="MGO CATARMAN, CAMIGUIN">MGO CATARMAN, CAMIGUIN</option>
        <option value="MGO CATIGBIAN, BOHOL">MGO CATIGBIAN, BOHOL</option>
        <option value="MGO CATMON, CEBU">MGO CATMON, CEBU</option>
        <option value="MGO CATUBIG, NORTHERN SAMAR">
          MGO CATUBIG, NORTHERN SAMAR
        </option>
        <option value="MGO CAUAYAN, NEGROS OCCIDENTAL">
          MGO CAUAYAN, NEGROS OCCIDENTAL
        </option>
        <option value="MGO CAWAYAN, MASBATE">MGO CAWAYAN, MASBATE</option>
        <option value="MGO CERVANTES, ILOCOS SUR">
          MGO CERVANTES, ILOCOS SUR
        </option>
        <option value="MGO CLARIN, BOHOL">MGO CLARIN, BOHOL</option>
        <option value="MGO CLAVER, SURIGAO DEL NORTE">
          MGO CLAVER, SURIGAO DEL NORTE
        </option>
        <option value="MGO CLAVERIA, CAGAYAN">MGO CLAVERIA, CAGAYAN</option>
        <option value="MGO CLAVERIA, MASBATE">MGO CLAVERIA, MASBATE</option>
        <option value="MGO CLAVERIA, MISAMIS ORIENTAL">
          MGO CLAVERIA, MISAMIS ORIENTAL
        </option>
        <option value="MGO COMPOSTELA, CEBU">MGO COMPOSTELA, CEBU</option>
        <option value="MGO COMPOSTELA, DAVAO DE ORO">
          MGO COMPOSTELA, DAVAO DE ORO
        </option>
        <option value="MGO CONCEPCION, ILOILO">MGO CONCEPCION, ILOILO</option>
        <option value="MGO CONCEPCION, MISAMIS OCCIDENTAL">
          MGO CONCEPCION, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO CONCEPCION, ROMBLON">MGO CONCEPCION, ROMBLON</option>
        <option value="MGO CONCEPCION, TARLAC">MGO CONCEPCION, TARLAC</option>
        <option value="MGO CONNER, APAYAO">MGO CONNER, APAYAO</option>
        <option value="MGO CONSOLACION, CEBU">MGO CONSOLACION, CEBU</option>
        <option value="MGO CORDON, ISABELA">MGO CORDON, ISABELA</option>
        <option value="MGO CORDOVA, CEBU">MGO CORDOVA, CEBU</option>
        <option value="MGO CORELLA, BOHOL">MGO CORELLA, BOHOL</option>
        <option value="MGO CORON, PALAWAN">MGO CORON, PALAWAN</option>
        <option value="MGO CORTES, BOHOL">MGO CORTES, BOHOL</option>
        <option value="MGO CORTES, SURIGAO DEL SUR">
          MGO CORTES, SURIGAO DEL SUR
        </option>
        <option value="MGO CULASI, ANTIQUE">MGO CULASI, ANTIQUE</option>
        <option value="MGO CULION, PALAWAN">MGO CULION, PALAWAN</option>
        <option value="MGO CURRIMAO, ILOCOS NORTE">
          MGO CURRIMAO, ILOCOS NORTE
        </option>
        <option value="MGO CUYAPO, NUEVA ECIJA">MGO CUYAPO, NUEVA ECIJA</option>
        <option value="MGO CUYO, PALAWAN">MGO CUYO, PALAWAN</option>
        <option value="MGO DAANBANTAYAN, CEBU">MGO DAANBANTAYAN, CEBU</option>
        <option value="MGO DAGAMI, LEYTE">MGO DAGAMI, LEYTE</option>
        <option value="MGO DAGOHOY, BOHOL">MGO DAGOHOY, BOHOL</option>
        <option value="MGO DAGUIOMAN, ABRA">MGO DAGUIOMAN, ABRA</option>
        <option value="MGO DALAGUETE, CEBU">MGO DALAGUETE, CEBU</option>
        <option value="MGO DANAO, BOHOL">MGO DANAO, BOHOL</option>
        <option value="MGO DANGCAGAN, BUKIDNON">MGO DANGCAGAN, BUKIDNON</option>
        <option value="MGO DANGLAS, ABRA">MGO DANGLAS, ABRA</option>
        <option value="MGO DAO, CAPIZ">MGO DAO, CAPIZ</option>
        <option value="MGO DAPA, SURIGAO DEL NORTE">
          MGO DAPA, SURIGAO DEL NORTE
        </option>
        <option value="MGO DARAGA (LOCSIN), ALBAY">
          MGO DARAGA (LOCSIN), ALBAY
        </option>
        <option value="MGO DARAM, SAMAR (WESTERN)">
          MGO DARAM, SAMAR (WESTERN)
        </option>
        <option value="MGO DASOL, PANGASINAN">MGO DASOL, PANGASINAN</option>
        <option value="MGO DATU ABDULLAH SANGKI, MAGUINDANAO">
          MGO DATU ABDULLAH SANGKI, MAGUINDANAO
        </option>
        <option value="MGO DATU ANGGAL MIDTIMBANG, MAGUINDANAO">
          MGO DATU ANGGAL MIDTIMBANG, MAGUINDANAO
        </option>
        <option value="MGO DATU BLAH T. SINSUAT, MAGUINDANAO">
          MGO DATU BLAH T. SINSUAT, MAGUINDANAO
        </option>
        <option value="MGO DATU HOFFER AMPATUAN, MAGUINDANAO">
          MGO DATU HOFFER AMPATUAN, MAGUINDANAO
        </option>
        <option value="MGO DATU PIANG, MAGUINDANAO">
          MGO DATU PIANG, MAGUINDANAO
        </option>
        <option value="MGO DATU SALIBO, MAGUINDANAO">
          MGO DATU SALIBO, MAGUINDANAO
        </option>
        <option value="MGO DATU SAUDI-AMPATUAN, MAGUINDANAO">
          MGO DATU SAUDI-AMPATUAN, MAGUINDANAO
        </option>
        <option value="MGO DATU UNSAY, MAGUINDANAO">
          MGO DATU UNSAY, MAGUINDANAO
        </option>
        <option value="MGO DAUIN, NEGROS ORIENTAL">
          MGO DAUIN, NEGROS ORIENTAL
        </option>
        <option value="MGO DAUIS, BOHOL">MGO DAUIS, BOHOL</option>
        <option value="MGO DEL CARMEN, SURIGAO DEL NORTE">
          MGO DEL CARMEN, SURIGAO DEL NORTE
        </option>
        <option value="MGO DELFIN ALBANO (MAGSAYSAY), ISABELA">
          MGO DELFIN ALBANO (MAGSAYSAY), ISABELA
        </option>
        <option value="MGO DIADI, NUEVA VIZCAYA">
          MGO DIADI, NUEVA VIZCAYA
        </option>
        <option value="MGO DIFFUN, QUIRINO">MGO DIFFUN, QUIRINO</option>
        <option value="MGO DILASAG, AURORA">MGO DILASAG, AURORA</option>
        <option value="MGO DIMASALANG, MASBATE">MGO DIMASALANG, MASBATE</option>
        <option value="MGO DIMATALING, ZAMBOANGA DEL SUR">
          MGO DIMATALING, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO DIMIAO, BOHOL">MGO DIMIAO, BOHOL</option>
        <option value="MGO DINAGAT, DINAGAT ISLAND">
          MGO DINAGAT, DINAGAT ISLAND
        </option>
        <option value="MGO DINALUNGAN, AURORA">MGO DINALUNGAN, AURORA</option>
        <option value="MGO DINALUPIHAN, BATAAN">MGO DINALUPIHAN, BATAAN</option>
        <option value="MGO DINAS, ZAMBOANGA DEL SUR">
          MGO DINAS, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO DINGALAN , AURORA">MGO DINGALAN , AURORA</option>
        <option value="MGO DINGLE, ILOILO">MGO DINGLE, ILOILO</option>
        <option value="MGO DINGRAS, ILOCOS NORTE">
          MGO DINGRAS, ILOCOS NORTE
        </option>
        <option value="MGO DIPLAHAN, ZAMBOANGA SIBUGAY">
          MGO DIPLAHAN, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO DIVILACAN, ISABELA">MGO DIVILACAN, ISABELA</option>
        <option value="MGO DOLORES, ABRA">MGO DOLORES, ABRA</option>
        <option value="MGO DOLORES, EASTERN SAMAR">
          MGO DOLORES, EASTERN SAMAR
        </option>
        <option value="MGO DOLORES, QUEZON">MGO DOLORES, QUEZON</option>
        <option value="MGO DON CARLOS, BUKIDNON">
          MGO DON CARLOS, BUKIDNON
        </option>
        <option value="MGO DON MARCELINO, DAVAO DEL SUR">
          MGO DON MARCELINO, DAVAO DEL SUR
        </option>
        <option value="MGO DON VICTORIANO CHIONGBIAN, MISAMIS OCCIDENTAL">
          MGO DON VICTORIANO CHIONGBIAN, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO DOÑA REMEDIOS TRINIDAD, BULACAN">
          MGO DOÑA REMEDIOS TRINIDAD, BULACAN
        </option>
        <option value="MGO DUERO, BOHOL">MGO DUERO, BOHOL</option>
        <option value="MGO DULAG, LEYTE">MGO DULAG, LEYTE</option>
        <option value="MGO DUMALAG, CAPIZ">MGO DUMALAG, CAPIZ</option>
        <option value="MGO DUMALNEG, ILOCOS NORTE">
          MGO DUMALNEG, ILOCOS NORTE
        </option>
        <option value="MGO DUMANGAS, ILOILO">MGO DUMANGAS, ILOILO</option>
        <option value="MGO DUMARAN, PALAWAN">MGO DUMARAN, PALAWAN</option>
        <option value="MGO DUMARAO, CAPIZ">MGO DUMARAO, CAPIZ</option>
        <option value="MGO DUMINGAG, ZAMBOANGA DEL SUR">
          MGO DUMINGAG, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO DUPAX DEL NORTE, NUEVA VIZCAYA">
          MGO DUPAX DEL NORTE, NUEVA VIZCAYA
        </option>
        <option value="MGO ECHAGUE, ISABELA">MGO ECHAGUE, ISABELA</option>
        <option value="MGO EL NIDO (BACUIT), PALAWAN">
          MGO EL NIDO (BACUIT), PALAWAN
        </option>
        <option value="MGO ENRILE, CAGAYAN">MGO ENRILE, CAGAYAN</option>
        <option value="MGO ENRIQUE B MAGALONA (SARAVIA), NEGROS OCCIDENTAL">
          MGO ENRIQUE B MAGALONA (SARAVIA), NEGROS OCCIDENTAL
        </option>
        <option value="MGO ENRIQUE VILLANUEVA, SIQUIJOR">
          MGO ENRIQUE VILLANUEVA, SIQUIJOR
        </option>
        <option value="MGO ESPERANZA, AGUSAN DEL SUR">
          MGO ESPERANZA, AGUSAN DEL SUR
        </option>
        <option value="MGO ESPERANZA, MASBATE">MGO ESPERANZA, MASBATE</option>
        <option value="MGO ESPERANZA, SULTAN KUDARAT">
          MGO ESPERANZA, SULTAN KUDARAT
        </option>
        <option value="MGO ESTANCIA, ILOILO">MGO ESTANCIA, ILOILO</option>
        <option value="MGO FAMY, LAGUNA">MGO FAMY, LAGUNA</option>
        <option value="MGO FLORA, APAYAO">MGO FLORA, APAYAO</option>
        <option value="MGO FLORIDABLANCA, PAMPANGA">
          MGO FLORIDABLANCA, PAMPANGA
        </option>
        <option value="MGO GABALDON (BITULOK AND SABANI), NUEVA ECIJA">
          MGO GABALDON (BITULOK AND SABANI), NUEVA ECIJA
        </option>
        <option value="MGO GALIMUYOD, ILOCOS SUR">
          MGO GALIMUYOD, ILOCOS SUR
        </option>
        <option value="MGO GANASSI, LANAO DEL SUR">
          MGO GANASSI, LANAO DEL SUR
        </option>
        <option value="MGO GANDARA, SAMAR (WESTERN)">
          MGO GANDARA, SAMAR (WESTERN)
        </option>
        <option value="MGO GARCHITORENA, CAMARINES SUR">
          MGO GARCHITORENA, CAMARINES SUR
        </option>
        <option value="MGO GARCIA HERNANDEZ, BOHOL">
          MGO GARCIA HERNANDEZ, BOHOL
        </option>
        <option value="MGO Gattaran, Cagayan">MGO Gattaran, Cagayan</option>
        <option value="MGO GENERAL EMILIO AGUINALDO, CAVITE">
          MGO GENERAL EMILIO AGUINALDO, CAVITE
        </option>
        <option value="MGO GENERAL LUNA, QUEZON">
          MGO GENERAL LUNA, QUEZON
        </option>
        <option value="MGO GENERAL LUNA, SURIGAO DEL NORTE">
          MGO GENERAL LUNA, SURIGAO DEL NORTE
        </option>
        <option value="MGO GENERAL MACARTHUR, EASTERN SAMAR">
          MGO GENERAL MACARTHUR, EASTERN SAMAR
        </option>
        <option value="MGO GENERAL MAMERTO NATIVIDAD, NUEVA ECIJA">
          MGO GENERAL MAMERTO NATIVIDAD, NUEVA ECIJA
        </option>
        <option value="MGO GENERAL NAKAR, QUEZON">
          MGO GENERAL NAKAR, QUEZON
        </option>
        <option value="MGO GENERAL TINIO (PAPAYA), NUEVA ECIJA">
          MGO GENERAL TINIO (PAPAYA), NUEVA ECIJA
        </option>
        <option value="MGO GERONA, TARLAC">MGO GERONA, TARLAC</option>
        <option value="MGO GETAFE, BOHOL">MGO GETAFE, BOHOL</option>
        <option value="MGO GIGAQUIT, SURIGAO DEL NORTE">
          MGO GIGAQUIT, SURIGAO DEL NORTE
        </option>
        <option value="MGO GIGMOTO, CATANDUANES">
          MGO GIGMOTO, CATANDUANES
        </option>
        <option value="MGO GIPORLOS, EASTERN SAMAR">
          MGO GIPORLOS, EASTERN SAMAR
        </option>
        <option value="MGO GITAGUM, MISAMIS ORIENTAL">
          MGO GITAGUM, MISAMIS ORIENTAL
        </option>
        <option value="MGO GLAN, SARANGANI">MGO GLAN, SARANGANI</option>
        <option value="MGO GLORIA, ORIENTAL MINDORO">
          MGO GLORIA, ORIENTAL MINDORO
        </option>
        <option value="MGO GOA, CAMARINES SUR">MGO GOA, CAMARINES SUR</option>
        <option value="MGO GODOD, ZAMBOANGA DEL NORTE">
          MGO GODOD, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO GONZAGA, CAGAYAN">MGO GONZAGA, CAGAYAN</option>
        <option value="MGO GOVERNOR GENEROSO, DAVAO ORIENTAL">
          MGO GOVERNOR GENEROSO, DAVAO ORIENTAL
        </option>
        <option value="MGO GUAGUA, PAMPANGA">MGO GUAGUA, PAMPANGA</option>
        <option value="MGO GUBAT, SORSOGON">MGO GUBAT, SORSOGON</option>
        <option value="MGO GUIGUINTO, BULACAN">MGO GUIGUINTO, BULACAN</option>
        <option value="MGO GUIMBA, NUEVA ECIJA">MGO GUIMBA, NUEVA ECIJA</option>
        <option value="MGO GUIMBAL, ILOILO">MGO GUIMBAL, ILOILO</option>
        <option value="MGO GUINAYANGAN, QUEZON">MGO GUINAYANGAN, QUEZON</option>
        <option value="MGO GUINDULMAN, BOHOL">MGO GUINDULMAN, BOHOL</option>
        <option value="MGO GUINDULUNGAN, MAGUINDANAO">
          MGO GUINDULUNGAN, MAGUINDANAO
        </option>
        <option value="MGO GUINOBATAN, ALBAY">MGO GUINOBATAN, ALBAY</option>
        <option value="MGO GUIPOS, ZAMBOANGA DEL SUR">
          MGO GUIPOS, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO GUIUAN, EASTERN SAMAR">
          MGO GUIUAN, EASTERN SAMAR
        </option>
        <option value="MGO GUMACA, QUEZON">MGO GUMACA, QUEZON</option>
        <option value="MGO GUTALAC, ZAMBOANGA DEL NORTE">
          MGO GUTALAC, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO HADJI MUHTAMAD, BASILAN">
          MGO HADJI MUHTAMAD, BASILAN
        </option>
        <option value="MGO HAGONOY, BULACAN">MGO HAGONOY, BULACAN</option>
        <option value="MGO HAGONOY, DAVAO DEL SUR">
          MGO HAGONOY, DAVAO DEL SUR
        </option>
        <option value="MGO HERMOSA, BATAAN">MGO HERMOSA, BATAAN</option>
        <option value="MGO HERNANI, EASTERN SAMAR">
          MGO HERNANI, EASTERN SAMAR
        </option>
        <option value="MGO HILONGOS, LEYTE">MGO HILONGOS, LEYTE</option>
        <option value="MGO HINATUAN, SURIGAO DEL SUR">
          MGO HINATUAN, SURIGAO DEL SUR
        </option>
        <option value="MGO HINDANG, LEYTE">MGO HINDANG, LEYTE</option>
        <option value="MGO HINGYON, IFUGAO">MGO HINGYON, IFUGAO</option>
        <option value="MGO HINOBA-AN (ASIA), NEGROS OCCIDENTAL">
          MGO HINOBA-AN (ASIA), NEGROS OCCIDENTAL
        </option>
        <option value="MGO HINUNANGAN, SOUTHERN LEYTE">
          MGO HINUNANGAN, SOUTHERN LEYTE
        </option>
        <option value="MGO HINUNDAYAN, SOUTHERN LEYTE">
          MGO HINUNDAYAN, SOUTHERN LEYTE
        </option>
        <option value="MGO IBA (CAPITAL), ZAMBALES">
          MGO IBA (CAPITAL), ZAMBALES
        </option>
        <option value="MGO IBAAN, BATANGAS">MGO IBAAN, BATANGAS</option>
        <option value="MGO IBAJAY, AKLAN">MGO IBAJAY, AKLAN</option>
        <option value="MGO ILOG, NEGROS OCCIDENTAL">
          MGO ILOG, NEGROS OCCIDENTAL
        </option>
        <option value="MGO IMPASUG-ONG, BUKIDNON">
          MGO IMPASUG-ONG, BUKIDNON
        </option>
        <option value="MGO INDANAN, SULU">MGO INDANAN, SULU</option>
        <option value="MGO INDANG, CAVITE">MGO INDANG, CAVITE</option>
        <option value="MGO INFANTA, PANGASINAN">MGO INFANTA, PANGASINAN</option>
        <option value="MGO INFANTA, QUEZON">MGO INFANTA, QUEZON</option>
        <option value="MGO INITAO, MISAMIS ORIENTAL">
          MGO INITAO, MISAMIS ORIENTAL
        </option>
        <option value="MGO IPIL, ZAMBOANGA SIBUGAY">
          MGO IPIL, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO IROSIN, SORSOGON">MGO IROSIN, SORSOGON</option>
        <option value="MGO ISABEL, LEYTE">MGO ISABEL, LEYTE</option>
        <option value="MGO ISABELA, NEGROS OCCIDENTAL">
          MGO ISABELA, NEGROS OCCIDENTAL
        </option>
        <option value="MGO ISULAN (CAPITAL), SULTAN KUDARAT">
          MGO ISULAN (CAPITAL), SULTAN KUDARAT
        </option>
        <option value="MGO ITBAYAT, BATANES">MGO ITBAYAT, BATANES</option>
        <option value="MGO ITOGON, BENGUET">MGO ITOGON, BENGUET</option>
        <option value="MGO IVANA, BATANES">MGO IVANA, BATANES</option>
        <option value="MGO IVISAN, CAPIZ">MGO IVISAN, CAPIZ</option>
        <option value="MGO JAEN, NUEVA ECIJA">MGO JAEN, NUEVA ECIJA</option>
        <option value="MGO JAGNA, BOHOL">MGO JAGNA, BOHOL</option>
        <option value="MGO JALA-JALA, RIZAL">MGO JALA-JALA, RIZAL</option>
        <option value="MGO JAMINDAN, CAPIZ">MGO JAMINDAN, CAPIZ</option>
        <option value="MGO JANIUAY, ILOILO">MGO JANIUAY, ILOILO</option>
        <option value="MGO JARO, LEYTE">MGO JARO, LEYTE</option>
        <option value="MGO JASAAN, MISAMIS ORIENTAL">
          MGO JASAAN, MISAMIS ORIENTAL
        </option>
        <option value="MGO JIMALALUD, NEGROS ORIENTAL">
          MGO JIMALALUD, NEGROS ORIENTAL
        </option>
        <option value="MGO JIMENEZ, MISAMIS OCCIDENTAL">
          MGO JIMENEZ, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO JOLO (CAPITAL), SULU">
          MGO JOLO (CAPITAL), SULU
        </option>
        <option value="MGO JOMALIG, QUEZON">MGO JOMALIG, QUEZON</option>
        <option value="MGO JONES, ISABELA">MGO JONES, ISABELA</option>
        <option value="MGO JOSE ABAD SANTOS, DAVAO OCCIDENTAL">
          MGO JOSE ABAD SANTOS, DAVAO OCCIDENTAL
        </option>
        <option value="MGO JOSE DALMAN (PONOT), ZAMBOANGA DEL NORTE">
          MGO JOSE DALMAN (PONOT), ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO JOSE PANGANIBAN, CAMARINES NORTE">
          MGO JOSE PANGANIBAN, CAMARINES NORTE
        </option>
        <option value="MGO JOSEFINA, ZAMBOANGA DEL SUR">
          MGO JOSEFINA, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO JOVELLAR, ALBAY">MGO JOVELLAR, ALBAY</option>
        <option value="MGO JUBAN, SORSOGON">MGO JUBAN, SORSOGON</option>
        <option value="MGO JULITA, LEYTE">MGO JULITA, LEYTE</option>
        <option value="MGO KABASALAN, ZAMBOANGA SIBUGAY">
          MGO KABASALAN, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO KABAYAN, BENGUET">MGO KABAYAN, BENGUET</option>
        <option value="MGO KABUGAO (CAPITAL), APAYAO">
          MGO KABUGAO (CAPITAL), APAYAO
        </option>
        <option value="MGO KADINGILAN, BUKIDNON">
          MGO KADINGILAN, BUKIDNON
        </option>
        <option value="MGO KALAMANSIG, SULTAN KUDARAT">
          MGO KALAMANSIG, SULTAN KUDARAT
        </option>
        <option value="MGO KALAWIT, ZAMBOANGA DEL NORTE">
          MGO KALAWIT, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO KALAYAAN, PALAWAN">MGO KALAYAAN, PALAWAN</option>
        <option value="MGO KALILANGAN, BUKIDNON">
          MGO KALILANGAN, BUKIDNON
        </option>
        <option value="MGO KALINGALAN CALUANG, SULU">
          MGO KALINGALAN CALUANG, SULU
        </option>
        <option value="MGO KANANGA, LEYTE">MGO KANANGA, LEYTE</option>
        <option value="MGO KAPALONG, DAVAO DEL NORTE">
          MGO KAPALONG, DAVAO DEL NORTE
        </option>
        <option value="MGO KAPANGAN, BENGUET">MGO KAPANGAN, BENGUET</option>
        <option value="MGO KAPATAGAN, LANAO DEL NORTE">
          MGO KAPATAGAN, LANAO DEL NORTE
        </option>
        <option value="MGO KAPATAGAN, LANAO DEL SUR">
          MGO KAPATAGAN, LANAO DEL SUR
        </option>
        <option value="MGO KAUSWAGAN, LANAO DEL NORTE">
          MGO KAUSWAGAN, LANAO DEL NORTE
        </option>
        <option value="MGO KAWAYAN, BILIRAN">MGO KAWAYAN, BILIRAN</option>
        <option value="MGO KAWIT, CAVITE">MGO KAWIT, CAVITE</option>
        <option value="MGO KAYAPA, NUEVA VIZCAYA">
          MGO KAYAPA, NUEVA VIZCAYA
        </option>
        <option value="MGO KIAMBA, SARANGANI">MGO KIAMBA, SARANGANI</option>
        <option value="MGO KIANGAN, IFUGAO">MGO KIANGAN, IFUGAO</option>
        <option value="MGO KIBLAWAN, DAVAO DEL SUR">
          MGO KIBLAWAN, DAVAO DEL SUR
        </option>
        <option value="MGO KIBUNGAN, BENGUET">MGO KIBUNGAN, BENGUET</option>
        <option value="MGO KITAOTAO, BUKIDNON">MGO KITAOTAO, BUKIDNON</option>
        <option value="MGO KITCHARAO, AGUSAN DEL NORTE">
          MGO KITCHARAO, AGUSAN DEL NORTE
        </option>
        <option value="MGO KOLAMBUGAN, LANAO DEL NORTE">
          MGO KOLAMBUGAN, LANAO DEL NORTE
        </option>
        <option value="MGO KUMALARANG, ZAMBOANGA DEL SUR">
          MGO KUMALARANG, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO LA LIBERTAD, NEGROS ORIENTAL">
          MGO LA LIBERTAD, NEGROS ORIENTAL
        </option>
        <option value="MGO LA PAZ, ABRA">MGO LA PAZ, ABRA</option>
        <option value="MGO LA PAZ, AGUSAN DEL SUR">
          MGO LA PAZ, AGUSAN DEL SUR
        </option>
        <option value="MGO LA PAZ, LEYTE">MGO LA PAZ, LEYTE</option>
        <option value="MGO LA PAZ, TARLAC">MGO LA PAZ, TARLAC</option>
        <option value="MGO LA TRINIDAD (CAPITAL), BENGUET">
          MGO LA TRINIDAD (CAPITAL), BENGUET
        </option>
        <option value="MGO LAAK, DAVAO DE ORO">MGO LAAK, DAVAO DE ORO</option>
        <option value="MGO LABANGAN, ZAMBOANGA DEL SUR">
          MGO LABANGAN, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO LABASON, ZAMBOANGA DEL NORTE">
          MGO LABASON, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO LABO, CAMARINES NORTE">
          MGO LABO, CAMARINES NORTE
        </option>
        <option value="MGO LAGANGILANG, ABRA">MGO LAGANGILANG, ABRA</option>
        <option value="MGO LAGAWE (CAPITAL), IFUGAO">
          MGO LAGAWE (CAPITAL), IFUGAO
        </option>
        <option value="MGO LAGAYAN, ABRA">MGO LAGAYAN, ABRA</option>
        <option value="MGO LAGONOY, CAMARINES SUR">
          MGO LAGONOY, CAMARINES SUR
        </option>
        <option value="MGO LAKE SEBU, SOUTH COTABATO">
          MGO LAKE SEBU, SOUTH COTABATO
        </option>
        <option value="MGO LAKEWOOD, ZAMBOANGA DEL SUR">
          MGO LAKEWOOD, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO LAL-LO, CAGAYAN">MGO LAL-LO, CAGAYAN</option>
        <option value="MGO LALA, LANAO DEL NORTE">
          MGO LALA, LANAO DEL NORTE
        </option>
        <option value="MGO LAMBAYONG (MARIANO MARCOS), SULTAN KUDARAT">
          MGO LAMBAYONG (MARIANO MARCOS), SULTAN KUDARAT
        </option>
        <option value="MGO LAMBUNAO, ILOILO">MGO LAMBUNAO, ILOILO</option>
        <option value="MGO LAMUT, IFUGAO">MGO LAMUT, IFUGAO</option>
        <option value="MGO LANTAPAN, BUKIDNON">MGO LANTAPAN, BUKIDNON</option>
        <option value="MGO LANTAWAN, BASILAN">MGO LANTAWAN, BASILAN</option>
        <option value="MGO LANUZA, SURIGAO DEL SUR">
          MGO LANUZA, SURIGAO DEL SUR
        </option>
        <option value="MGO LAPINIG, NORTHERN SAMAR">
          MGO LAPINIG, NORTHERN SAMAR
        </option>
        <option value="MGO LAPUYAN, ZAMBOANGA DEL SUR">
          MGO LAPUYAN, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO LARENA, SIQUIJOR">MGO LARENA, SIQUIJOR</option>
        <option value="MGO LAS NAVAS, NORTHERN SAMAR">
          MGO LAS NAVAS, NORTHERN SAMAR
        </option>
        <option value="MGO LAS NIEVES, AGUSAN DEL NORTE">
          MGO LAS NIEVES, AGUSAN DEL NORTE
        </option>
        <option value="MGO LASAM, CAGAYAN">MGO LASAM, CAGAYAN</option>
        <option value="MGO LAUA-AN, ANTIQUE">MGO LAUA-AN, ANTIQUE</option>
        <option value="MGO LAUR, NUEVA ECIJA">MGO LAUR, NUEVA ECIJA</option>
        <option value="MGO LAUREL, BATANGAS">MGO LAUREL, BATANGAS</option>
        <option value="MGO LAVEZARES, NORTHERN SAMAR">
          MGO LAVEZARES, NORTHERN SAMAR
        </option>
        <option value="MGO LAWAAN, EASTERN SAMAR">
          MGO LAWAAN, EASTERN SAMAR
        </option>
        <option value="MGO LAZI, SIQUIJOR">MGO LAZI, SIQUIJOR</option>
        <option value="MGO LEBAK, SULTAN KUDARAT">
          MGO LEBAK, SULTAN KUDARAT
        </option>
        <option value="MGO LEGANES, ILOILO">MGO LEGANES, ILOILO</option>
        <option value="MGO LEMERY, BATANGAS">MGO LEMERY, BATANGAS</option>
        <option value="MGO LEMERY, ILOILO">MGO LEMERY, ILOILO</option>
        <option value="MGO LEON, ILOILO">MGO LEON, ILOILO</option>
        <option value="MGO LEYTE, LEYTE">MGO LEYTE, LEYTE</option>
        <option value="MGO LEZO, AKLAN">MGO LEZO, AKLAN</option>
        <option value="MGO LIAN, BATANGAS">MGO LIAN, BATANGAS</option>
        <option value="MGO LIANGA, SURIGAO DEL SUR">
          MGO LIANGA, SURIGAO DEL SUR
        </option>
        <option value="MGO LIBACAO, AKLAN">MGO LIBACAO, AKLAN</option>
        <option value="MGO LIBAGON, SOUTHERN LEYTE">
          MGO LIBAGON, SOUTHERN LEYTE
        </option>
        <option value="MGO LIBERTAD, ANTIQUE">MGO LIBERTAD, ANTIQUE</option>
        <option value="MGO LIBERTAD, MISAMIS ORIENTAL">
          MGO LIBERTAD, MISAMIS ORIENTAL
        </option>
        <option value="MGO LIBMANAN, CAMARINES SUR">
          MGO LIBMANAN, CAMARINES SUR
        </option>
        <option value="MGO LIBON, ALBAY">MGO LIBON, ALBAY</option>
        <option value="MGO LIBONA, BUKIDNON">MGO LIBONA, BUKIDNON</option>
        <option value="MGO LIBUNGAN, NORTH COTABATO">
          MGO LIBUNGAN, NORTH COTABATO
        </option>
        <option value="MGO LICAB, NUEVA ECIJA">MGO LICAB, NUEVA ECIJA</option>
        <option value="MGO LIDLIDDA, ILOCOS SUR">
          MGO LIDLIDDA, ILOCOS SUR
        </option>
        <option value="MGO LILIW, LAGUNA">MGO LILIW, LAGUNA</option>
        <option value="MGO LILOAN, CEBU">MGO LILOAN, CEBU</option>
        <option value="MGO LILOAN, SOUTHERN LEYTE">
          MGO LILOAN, SOUTHERN LEYTE
        </option>
        <option value="MGO LILOY, ZAMBOANGA DEL NORTE">
          MGO LILOY, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO LIMASAWA, SOUTHERN LEYTE">
          MGO LIMASAWA, SOUTHERN LEYTE
        </option>
        <option value="MGO LIMAY, BATAAN">MGO LIMAY, BATAAN</option>
        <option value="MGO LINAMON, LANAO DEL NORTE">
          MGO LINAMON, LANAO DEL NORTE
        </option>
        <option value="MGO LINAPACAN, PALAWAN">MGO LINAPACAN, PALAWAN</option>
        <option value="MGO LINGAYEN (CAPITAL), PANGASINAN">
          MGO LINGAYEN (CAPITAL), PANGASINAN
        </option>
        <option value="MGO LINGIG, SURIGAO DEL SUR">
          MGO LINGIG, SURIGAO DEL SUR
        </option>
        <option value="MGO LLANERA, NUEVA ECIJA">
          MGO LLANERA, NUEVA ECIJA
        </option>
        <option value="MGO LLORENTE, EASTERN SAMAR">
          MGO LLORENTE, EASTERN SAMAR
        </option>
        <option value="MGO LOAY, BOHOL">MGO LOAY, BOHOL</option>
        <option value="MGO LOBO, BATANGAS">MGO LOBO, BATANGAS</option>
        <option value="MGO LOBOC, BOHOL">MGO LOBOC, BOHOL</option>
        <option value="MGO LOOC, OCCIDENTAL MINDORO">
          MGO LOOC, OCCIDENTAL MINDORO
        </option>
        <option value="MGO LOOC, ROMBLON">MGO LOOC, ROMBLON</option>
        <option value="MGO LOON, BOHOL">MGO LOON, BOHOL</option>
        <option value="MGO LOPEZ JAENA, MISAMIS OCCIDENTAL">
          MGO LOPEZ JAENA, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO LOPEZ, QUEZON">MGO LOPEZ, QUEZON</option>
        <option value="MGO LORETO, AGUSAN DEL SUR">
          MGO LORETO, AGUSAN DEL SUR
        </option>
        <option value="MGO LOS BANOS, LAGUNA">MGO LOS BANOS, LAGUNA</option>
        <option value="MGO LUBA, ABRA">MGO LUBA, ABRA</option>
        <option value="MGO LUBANG, OCCIDENTAL MINDORO">
          MGO LUBANG, OCCIDENTAL MINDORO
        </option>
        <option value="MGO LUBAO, PAMPANGA">MGO LUBAO, PAMPANGA</option>
        <option value="MGO LUBUAGAN, KALINGA">MGO LUBUAGAN, KALINGA</option>
        <option value="MGO LUCBAN, QUEZON">MGO LUCBAN, QUEZON</option>
        <option value="MGO LUGAIT, MISAMIS ORIENTAL">
          MGO LUGAIT, MISAMIS ORIENTAL
        </option>
        <option value="MGO LUGUS, SULU">MGO LUGUS, SULU</option>
        <option value="MGO LUISIANA, LAGUNA">MGO LUISIANA, LAGUNA</option>
        <option value="MGO LUMBA-BAYABAO, LANAO DEL SUR">
          MGO LUMBA-BAYABAO, LANAO DEL SUR
        </option>
        <option value="MGO LUMBAYANAGUE, LANAO DEL SUR">
          MGO LUMBAYANAGUE, LANAO DEL SUR
        </option>
        <option value="MGO LUNA, APAYAO">MGO LUNA, APAYAO</option>
        <option value="MGO LUPAO, NUEVA ECIJA">MGO LUPAO, NUEVA ECIJA</option>
        <option value="MGO LUPON, DAVAO ORIENTAL">
          MGO LUPON, DAVAO ORIENTAL
        </option>
        <option value="MGO MA-AYON, CAPIZ">MGO MA-AYON, CAPIZ</option>
        <option value="MGO MABINAY, NEGROS ORIENTAL">
          MGO MABINAY, NEGROS ORIENTAL
        </option>
        <option value="MGO MABINI, BATANGAS">MGO MABINI, BATANGAS</option>
        <option value="MGO MABINI, BOHOL">MGO MABINI, BOHOL</option>
        <option value="MGO MABINI, DAVAO DE ORO">
          MGO MABINI, DAVAO DE ORO
        </option>
        <option value="MGO MABINI, PANGASINAN">MGO MABINI, PANGASINAN</option>
        <option value="MGO MABITAC, LAGUNA">MGO MABITAC, LAGUNA</option>
        <option value="MGO MACABEBE, PAMPANGA">MGO MACABEBE, PAMPANGA</option>
        <option value="MGO MACALELON, QUEZON">MGO MACALELON, QUEZON</option>
        <option value="MGO MACARTHUR, LEYTE">MGO MACARTHUR, LEYTE</option>
        <option value="MGO MACO, DAVAO DE ORO">MGO MACO, DAVAO DE ORO</option>
        <option value="MGO MACONACON, ISABELA">MGO MACONACON, ISABELA</option>
        <option value="MGO MACROHON, SOUTHERN LEYTE">
          MGO MACROHON, SOUTHERN LEYTE
        </option>
        <option value="MGO MADDELA, QUIRINO">MGO MADDELA, QUIRINO</option>
        <option value="MGO MADRID, SURIGAO DEL SUR">
          MGO MADRID, SURIGAO DEL SUR
        </option>
        <option value="MGO MADRIDEJOS, CEBU">MGO MADRIDEJOS, CEBU</option>
        <option value="MGO MAGALANG, PAMPANGA">MGO MAGALANG, PAMPANGA</option>
        <option value="MGO MAGALLANES, AGUSAN DEL NORTE">
          MGO MAGALLANES, AGUSAN DEL NORTE
        </option>
        <option value="MGO MAGALLANES, CAVITE">MGO MAGALLANES, CAVITE</option>
        <option value="MGO MAGALLANES, SORSOGON">
          MGO MAGALLANES, SORSOGON
        </option>
        <option value="MGO MAGARAO, CAMARINES SUR">
          MGO MAGARAO, CAMARINES SUR
        </option>
        <option value="MGO MAGDALENA, LAGUNA">MGO MAGDALENA, LAGUNA</option>
        <option value="MGO MAGDIWANG, ROMBLON">MGO MAGDIWANG, ROMBLON</option>
        <option value="MGO MAGPET, NORTH COTABATO">
          MGO MAGPET, NORTH COTABATO
        </option>
        <option value="MGO MAGSAYSAY (LINUGOS), MISAMIS ORIENTAL">
          MGO MAGSAYSAY (LINUGOS), MISAMIS ORIENTAL
        </option>
        <option value="MGO MAGSAYSAY, DAVAO DEL SUR">
          MGO MAGSAYSAY, DAVAO DEL SUR
        </option>
        <option value="MGO MAGSAYSAY, LANAO DEL NORTE">
          MGO MAGSAYSAY, LANAO DEL NORTE
        </option>
        <option value="MGO MAGSAYSAY, OCCIDENTAL MINDORO">
          MGO MAGSAYSAY, OCCIDENTAL MINDORO
        </option>
        <option value="MGO MAGSAYSAY, PALAWAN">MGO MAGSAYSAY, PALAWAN</option>
        <option value="MGO MAGSINGAL, ILOCOS SUR">
          MGO MAGSINGAL, ILOCOS SUR
        </option>
        <option value="MGO MAHATAO, BATANES">MGO MAHATAO, BATANES</option>
        <option value="MGO MAHAYAG, ZAMBOANGA DEL SUR">
          MGO MAHAYAG, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO MAHINOG, CAMIGUIN">MGO MAHINOG, CAMIGUIN</option>
        <option value="MGO MAIGO, LANAO DEL NORTE">
          MGO MAIGO, LANAO DEL NORTE
        </option>
        <option value="MGO MAINIT, SURIGAO DEL NORTE">
          MGO MAINIT, SURIGAO DEL NORTE
        </option>
        <option value="MGO MAITUM, SARANGANI">MGO MAITUM, SARANGANI</option>
        <option value="MGO Majayjay, Laguna">MGO Majayjay, Laguna</option>
        <option value="MGO MAKATO, AKLAN">MGO MAKATO, AKLAN</option>
        <option value="MGO MALABUYOC, CEBU">MGO MALABUYOC, CEBU</option>
        <option value="MGO MALALAG, DAVAO DEL SUR">
          MGO MALALAG, DAVAO DEL SUR
        </option>
        <option value="MGO MALANGAS, ZAMBOANGA SIBUGAY">
          MGO MALANGAS, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO MALAPATAN, SARANGANI">
          MGO MALAPATAN, SARANGANI
        </option>
        <option value="MGO MALASIQUI, PANGASINAN">
          MGO MALASIQUI, PANGASINAN
        </option>
        <option value="MGO MALAY, AKLAN">MGO MALAY, AKLAN</option>
        <option value="MGO MALIBCONG, ABRA">MGO MALIBCONG, ABRA</option>
        <option value="MGO MALILIPOT, ALBAY">MGO MALILIPOT, ALBAY</option>
        <option value="MGO MALIMONO, SURIGAO DEL NORTE">
          MGO MALIMONO, SURIGAO DEL NORTE
        </option>
        <option value="MGO MALINAO, AKLAN">MGO MALINAO, AKLAN</option>
        <option value="MGO MALINAO, ALBAY">MGO MALINAO, ALBAY</option>
        <option value="MGO Malita Davao del Sur">
          MGO Malita Davao del Sur
        </option>
        <option value="MGO MALITA, DAVAO DEL SUR">
          MGO MALITA, DAVAO DEL SUR
        </option>
        <option value="MGO MALITBOG, BUKIDNON">MGO MALITBOG, BUKIDNON</option>
        <option value="MGO MALITBOG, SOUTHERN LEYTE">
          MGO MALITBOG, SOUTHERN LEYTE
        </option>
        <option value="MGO MALLIG, ISABELA">MGO MALLIG, ISABELA</option>
        <option value="MGO MALUNGON, SARANGANI">MGO MALUNGON, SARANGANI</option>
        <option value="MGO MALUSO, BASILAN">MGO MALUSO, BASILAN</option>
        <option value="MGO MALVAR, BATANGAS">MGO MALVAR, BATANGAS</option>
        <option value="MGO MAMASAPANO, MAGUINDANAO">
          MGO MAMASAPANO, MAGUINDANAO
        </option>
        <option value="MGO MAMBAJAO (CAPITAL), CAMIGUIN">
          MGO MAMBAJAO (CAPITAL), CAMIGUIN
        </option>
        <option value="MGO MAMBURAO (CAPITAL), OCCIDENTAL MINDORO">
          MGO MAMBURAO (CAPITAL), OCCIDENTAL MINDORO
        </option>
        <option value="MGO MANABO, ABRA">MGO MANABO, ABRA</option>
        <option value="MGO MANAOAG, PANGASINAN">MGO MANAOAG, PANGASINAN</option>
        <option value="MGO MANAPLA, NEGROS OCCIDENTAL">
          MGO MANAPLA, NEGROS OCCIDENTAL
        </option>
        <option value="MGO MANAY, DAVAO ORIENTAL">
          MGO MANAY, DAVAO ORIENTAL
        </option>
        <option value="MGO MANDAON, MASBATE">MGO MANDAON, MASBATE</option>
        <option value="MGO MANGALDAN, PANGASINAN">
          MGO MANGALDAN, PANGASINAN
        </option>
        <option value="MGO MANGATAREM, PANGASINAN">
          MGO MANGATAREM, PANGASINAN
        </option>
        <option value="MGO MANGUDADATU, MAGUINDANAO">
          MGO MANGUDADATU, MAGUINDANAO
        </option>
        <option value="MGO MANITO, ALBAY">MGO MANITO, ALBAY</option>
        <option value="MGO MANJUYOD, NEGROS ORIENTAL">
          MGO MANJUYOD, NEGROS ORIENTAL
        </option>
        <option value="MGO MANOLO FORTICH, BUKIDNON">
          MGO MANOLO FORTICH, BUKIDNON
        </option>
        <option value="MGO MANSALAY, ORIENTAL MINDORO">
          MGO MANSALAY, ORIENTAL MINDORO
        </option>
        <option value="MGO MANUKAN, ZAMBOANGA DEL NORTE">
          MGO MANUKAN, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO MAPANDAN, PANGASINAN">
          MGO MAPANDAN, PANGASINAN
        </option>
        <option value="MGO MARABUT, SAMAR (WESTERN)">
          MGO MARABUT, SAMAR (WESTERN)
        </option>
        <option value="MGO MARAGONDON, CAVITE">MGO MARAGONDON, CAVITE</option>
        <option value="MGO MARAGUSAN, DAVAO DE ORO">
          MGO MARAGUSAN, DAVAO DE ORO
        </option>
        <option value="MGO MARAMAG, BUKIDNON">MGO MARAMAG, BUKIDNON</option>
        <option value="MGO MARANTAO, LANAO DEL SUR">
          MGO MARANTAO, LANAO DEL SUR
        </option>
        <option value="MGO MARCOS, ILOCOS NORTE">
          MGO MARCOS, ILOCOS NORTE
        </option>
        <option value="MGO MARGOSATUBIG, ZAMBOANGA DEL SUR">
          MGO MARGOSATUBIG, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO MARIA AURORA, AURORA">
          MGO MARIA AURORA, AURORA
        </option>
        <option value="MGO MARIA, SIQUIJOR">MGO MARIA, SIQUIJOR</option>
        <option value="MGO MARIBOJOC, BOHOL">MGO MARIBOJOC, BOHOL</option>
        <option value="MGO MARIHATAG, SURIGAO DEL SUR">
          MGO MARIHATAG, SURIGAO DEL SUR
        </option>
        <option value="MGO MARILAO, BULACAN">MGO MARILAO, BULACAN</option>
        <option value="MGO MARIVELES, BATAAN">MGO MARIVELES, BATAAN</option>
        <option value="MGO MAROGONG, LANAO DEL SUR">
          MGO MAROGONG, LANAO DEL SUR
        </option>
        <option value="MGO MASANTOL, PAMPANGA">MGO MASANTOL, PAMPANGA</option>
        <option value="MGO MASINLOC, ZAMBALES">MGO MASINLOC, ZAMBALES</option>
        <option value="MGO MASLOG, EASTERN SAMAR">
          MGO MASLOG, EASTERN SAMAR
        </option>
        <option value="MGO MATAAS NA KAHOY, BATANGAS">
          MGO MATAAS NA KAHOY, BATANGAS
        </option>
        <option value="MGO MATALAM, NORTH COTABATO">
          MGO MATALAM, NORTH COTABATO
        </option>
        <option value="MGO MATALOM, LEYTE">MGO MATALOM, LEYTE</option>
        <option value="MGO MATANAO, DAVAO DEL SUR">
          MGO MATANAO, DAVAO DEL SUR
        </option>
        <option value="MGO MATANOG, MAGUINDANAO">
          MGO MATANOG, MAGUINDANAO
        </option>
        <option value="MGO MATNOG, SORSOGON">MGO MATNOG, SORSOGON</option>
        <option value="MGO MATUGUINAO, SAMAR (WESTERN)">
          MGO MATUGUINAO, SAMAR (WESTERN)
        </option>
        <option value="MGO MATUNGAO, LANAO DEL NORTE">
          MGO MATUNGAO, LANAO DEL NORTE
        </option>
        <option value="MGO MAUBAN, QUEZON">MGO MAUBAN, QUEZON</option>
        <option value="MGO MAWAB, DAVAO DE ORO">MGO MAWAB, DAVAO DE ORO</option>
        <option value="MGO MAYANTOC, TARLAC">MGO MAYANTOC, TARLAC</option>
        <option value="MGO MAYDOLONG, EASTERN SAMAR">
          MGO MAYDOLONG, EASTERN SAMAR
        </option>
        <option value="MGO MAYOYAO, IFUGAO">MGO MAYOYAO, IFUGAO</option>
        <option value="MGO MEDELLIN, CEBU">MGO MEDELLIN, CEBU</option>
        <option value="MGO MEDINA, MISAMIS ORIENTAL">
          MGO MEDINA, MISAMIS ORIENTAL
        </option>
        <option value="MGO MENDEZ, CAVITE">MGO MENDEZ, CAVITE</option>
        <option value="MGO MERCEDES, CAMARINES NORTE">
          MGO MERCEDES, CAMARINES NORTE
        </option>
        <option value="MGO MERIDA, LEYTE">MGO MERIDA, LEYTE</option>
        <option value="MGO MEXICO, PAMPANGA">MGO MEXICO, PAMPANGA</option>
        <option value="MGO MIAGAO, ILOILO">MGO MIAGAO, ILOILO</option>
        <option value="MGO MIDSALIP, ZAMBOANGA DEL SUR">
          MGO MIDSALIP, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO MIDSAYAP, NORTH COTABATO">
          MGO MIDSAYAP, NORTH COTABATO
        </option>
        <option value="MGO MILAGROS, MASBATE">MGO MILAGROS, MASBATE</option>
        <option value="MGO MILAOR, CAMARINES SUR">
          MGO MILAOR, CAMARINES SUR
        </option>
        <option value="MGO MINA, ILOILO">MGO MINA, ILOILO</option>
        <option value="MGO MINALABAC, CAMARINES SUR">
          MGO MINALABAC, CAMARINES SUR
        </option>
        <option value="MGO MINGLANILLA, CEBU">MGO MINGLANILLA, CEBU</option>
        <option value="MGO MLANG, NORTH COTABATO">
          MGO MLANG, NORTH COTABATO
        </option>
        <option value="MGO MOALBOAL, CEBU">MGO MOALBOAL, CEBU</option>
        <option value="MGO MOBO, MASBATE">MGO MOBO, MASBATE</option>
        <option value="MGO MOGPOG, MARINDUQUE">MGO MOGPOG, MARINDUQUE</option>
        <option value="MGO MOISES PADILLA (MAGALLON), NEGROS OCCIDENTAL">
          MGO MOISES PADILLA (MAGALLON), NEGROS OCCIDENTAL
        </option>
        <option value="MGO MOLAVE, ZAMBOANGA DEL SUR">
          MGO MOLAVE, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO MONDRAGON, NORTHERN SAMAR">
          MGO MONDRAGON, NORTHERN SAMAR
        </option>
        <option value="MGO MONKAYO, COMPOSTELA VALLEY">
          MGO MONKAYO, COMPOSTELA VALLEY
        </option>
        <option value="MGO MONTEVISTA, DAVAO DE ORO">
          MGO MONTEVISTA, DAVAO DE ORO
        </option>
        <option value="MGO MORONG, RIZAL">MGO MORONG, RIZAL</option>
        <option value="MGO MOTIONG, SAMAR (WESTERN)">
          MGO MOTIONG, SAMAR (WESTERN)
        </option>
        <option value="MGO MULANAY, QUEZON">MGO MULANAY, QUEZON</option>
        <option value="MGO MUNAI, LANAO DEL NORTE">
          MGO MUNAI, LANAO DEL NORTE
        </option>
        <option value="MGO MURCIA, NEGROS OCCIDENTAL">
          MGO MURCIA, NEGROS OCCIDENTAL
        </option>
        <option value="MGO MUTIA, ZAMBOANGA DEL NORTE">
          MGO MUTIA, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO NAAWAN, MISAMIS ORIENTAL">
          MGO NAAWAN, MISAMIS ORIENTAL
        </option>
        <option value="MGO NABUA, CAMARINES SUR">
          MGO NABUA, CAMARINES SUR
        </option>
        <option value="MGO NAGCARLAN, LAGUNA">MGO NAGCARLAN, LAGUNA</option>
        <option value="MGO NAGTIPUNAN, QUIRINO">MGO NAGTIPUNAN, QUIRINO</option>
        <option value="MGO NAGUILIAN, ISABELA">MGO NAGUILIAN, ISABELA</option>
        <option value="MGO NAIC, CAVITE">MGO NAIC, CAVITE</option>
        <option value="MGO NAMPICUAN, NUEVA ECIJA">
          MGO NAMPICUAN, NUEVA ECIJA
        </option>
        <option value="MGO NARRA, PALAWAN">MGO NARRA, PALAWAN</option>
        <option value="MGO NARVACAN, ILOCOS SUR">
          MGO NARVACAN, ILOCOS SUR
        </option>
        <option value="MGO NASIPIT, AGUSAN DEL NORTE">
          MGO NASIPIT, AGUSAN DEL NORTE
        </option>
        <option value="MGO NASUGBU, BATANGAS">MGO NASUGBU, BATANGAS</option>
        <option value="MGO NATIVIDAD, PANGASINAN">
          MGO NATIVIDAD, PANGASINAN
        </option>
        <option value="MGO NATONIN, MOUNTAIN PROVINCE">
          MGO NATONIN, MOUNTAIN PROVINCE
        </option>
        <option value="MGO NAUJAN, ORIENTAL MINDORO">
          MGO NAUJAN, ORIENTAL MINDORO
        </option>
        <option value="MGO NAVAL (CAPITAL), BILIRAN">
          MGO NAVAL (CAPITAL), BILIRAN
        </option>
        <option value="MGO NEW BATAAN, COMPOSTELA VALLEY">
          MGO NEW BATAAN, COMPOSTELA VALLEY
        </option>
        <option value="MGO NEW BATAAN, DAVAO DE ORO">
          MGO NEW BATAAN, DAVAO DE ORO
        </option>
        <option value="MGO NEW CORELLA, DAVAO DEL NORTE">
          MGO NEW CORELLA, DAVAO DEL NORTE
        </option>
        <option value="MGO NEW WASHINGTON, AKLAN">
          MGO NEW WASHINGTON, AKLAN
        </option>
        <option value="MGO NORALA, SOUTH COTABATO">
          MGO NORALA, SOUTH COTABATO
        </option>
        <option value="MGO NORTHERN KABUNTALAN, MAGUINDANAO">
          MGO NORTHERN KABUNTALAN, MAGUINDANAO
        </option>
        <option value="MGO NORZAGARAY, BULACAN">MGO NORZAGARAY, BULACAN</option>
        <option value="MGO NUEVA ERA, ILOCOS NORTE">
          MGO NUEVA ERA, ILOCOS NORTE
        </option>
        <option value="MGO NUEVA VALENCIA, GUIMARAS">
          MGO NUEVA VALENCIA, GUIMARAS
        </option>
        <option value="MGO NUMANCIA, AKLAN">MGO NUMANCIA, AKLAN</option>
        <option value="MGO NUNUNGAN, LANAO DEL NORTE">
          MGO NUNUNGAN, LANAO DEL NORTE
        </option>
        <option value="MGO OAS, ALBAY">MGO OAS, ALBAY</option>
        <option value="MGO OBANDO, BULACAN">MGO OBANDO, BULACAN</option>
        <option value="MGO ODIONGAN, ROMBLON">MGO ODIONGAN, ROMBLON</option>
        <option value="MGO OLUTANGA, ZAMBOANGA SIBUGAY">
          MGO OLUTANGA, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO OMAR, SULU">MGO OMAR, SULU</option>
        <option value="MGO OPOL, MISAMIS ORIENTAL">
          MGO OPOL, MISAMIS ORIENTAL
        </option>
        <option value="MGO ORANI, BATAAN">MGO ORANI, BATAAN</option>
        <option value="MGO ORAS, EASTERN SAMAR">MGO ORAS, EASTERN SAMAR</option>
        <option value="MGO ORION, BATAAN">MGO ORION, BATAAN</option>
        <option value="MGO OSLOB, CEBU">MGO OSLOB, CEBU</option>
        <option value="MGO OTON, ILOILO">MGO OTON, ILOILO</option>
        <option value="MGO PADADA, DAVAO DEL SUR">
          MGO PADADA, DAVAO DEL SUR
        </option>
        <option value="MGO PADRE BURGOS, QUEZON">
          MGO PADRE BURGOS, QUEZON
        </option>
        <option value="MGO PADRE GARCIA, BATANGAS">
          MGO PADRE GARCIA, BATANGAS
        </option>
        <option value="MGO PAETE, LAGUNA">MGO PAETE, LAGUNA</option>
        <option value="MGO PAGAGAWAN, MAGUINDANAO">
          MGO PAGAGAWAN, MAGUINDANAO
        </option>
        <option value="MGO PAGALUNGAN, MAGUINDANAO">
          MGO PAGALUNGAN, MAGUINDANAO
        </option>
        <option value="MGO PAGAYAWAN, LANAO DEL SUR">
          MGO PAGAYAWAN, LANAO DEL SUR
        </option>
        <option value="MGO PAGBILAO, QUEZON">MGO PAGBILAO, QUEZON</option>
        <option value="MGO PAGLAT, MAGUINDANAO">MGO PAGLAT, MAGUINDANAO</option>
        <option value="MGO PAGSANGHAN, SAMAR (WESTERN)">
          MGO PAGSANGHAN, SAMAR (WESTERN)
        </option>
        <option value="MGO PAGSANJAN, LAGUNA">MGO PAGSANJAN, LAGUNA</option>
        <option value="MGO PAGUDPUD, ILOCOS NORTE">
          MGO PAGUDPUD, ILOCOS NORTE
        </option>
        <option value="MGO PAKIL, LAGUNA">MGO PAKIL, LAGUNA</option>
        <option value="MGO PALANAN, ISABELA">MGO PALANAN, ISABELA</option>
        <option value="MGO PALAPAG, NORTHERN SAMAR">
          MGO PALAPAG, NORTHERN SAMAR
        </option>
        <option value="MGO PALAUIG, ZAMBALES">MGO PALAUIG, ZAMBALES</option>
        <option value="MGO PALIMBANG, SULTAN KUDARAT">
          MGO PALIMBANG, SULTAN KUDARAT
        </option>
        <option value="MGO PALO, LEYTE">MGO PALO, LEYTE</option>
        <option value="MGO PALOMPON, LEYTE">MGO PALOMPON, LEYTE</option>
        <option value="MGO PALUAN, OCCIDENTAL MINDORO">
          MGO PALUAN, OCCIDENTAL MINDORO
        </option>
        <option value="MGO PAMBUJAN, NORTHERN SAMAR">
          MGO PAMBUJAN, NORTHERN SAMAR
        </option>
        <option value="MGO PAMPLONA, NEGROS ORIENTAL">
          MGO PAMPLONA, NEGROS ORIENTAL
        </option>
        <option value="MGO PANAMAO, SULU">MGO PANAMAO, SULU</option>
        <option value="MGO PANAY, CAPIZ">MGO PANAY, CAPIZ</option>
        <option value="MGO PANDAG, MAGUINDANAO">MGO PANDAG, MAGUINDANAO</option>
        <option value="MGO PANDAMI, SULU">MGO PANDAMI, SULU</option>
        <option value="MGO PANDAN, ANTIQUE">MGO PANDAN, ANTIQUE</option>
        <option value="MGO PANDI, BULACAN">MGO PANDI, BULACAN</option>
        <option value="MGO PANGANIBAN (PAYO), CATANDUANES">
          MGO PANGANIBAN (PAYO), CATANDUANES
        </option>
        <option value="MGO PANGANTUCAN, BUKIDNON">
          MGO PANGANTUCAN, BUKIDNON
        </option>
        <option value="MGO PANGLIMA ESTINO (NEW PANAMAO), SULU">
          MGO PANGLIMA ESTINO (NEW PANAMAO), SULU
        </option>
        <option value="MGO PANGLIMA SUGALA (BALIMBING) (CAPITAL), TAWI-TAWI">
          MGO PANGLIMA SUGALA (BALIMBING) (CAPITAL), TAWI-TAWI
        </option>
        <option value="MGO PANIQUI, TARLAC">MGO PANIQUI, TARLAC</option>
        <option value="MGO PANITAN, CAPIZ">MGO PANITAN, CAPIZ</option>
        <option value="MGO PANTABANGAN, NUEVA ECIJA">
          MGO PANTABANGAN, NUEVA ECIJA
        </option>
        <option value="MGO PANTAR, LANAO DEL NORTE">
          MGO PANTAR, LANAO DEL NORTE
        </option>
        <option value="MGO PANTUKAN, DAVAO DE ORO">
          MGO PANTUKAN, DAVAO DE ORO
        </option>
        <option value="MGO PANUKULAN, QUEZON">MGO PANUKULAN, QUEZON</option>
        <option value="MGO PAOMBONG">MGO PAOMBONG</option>
        <option value="MGO PARACALE, CAMARINES NORTE">
          MGO PARACALE, CAMARINES NORTE
        </option>
        <option value="MGO PARACELIS, MOUNTAIN PROVINCE">
          MGO PARACELIS, MOUNTAIN PROVINCE
        </option>
        <option value="MGO PARANAS (WRIGHT), SAMAR (WESTERN)">
          MGO PARANAS (WRIGHT), SAMAR (WESTERN)
        </option>
        <option value="MGO PARANG, MAGUINDANAO">MGO PARANG, MAGUINDANAO</option>
        <option value="MGO PARANG, SULU">MGO PARANG, SULU</option>
        <option value="MGO PASACAO, CAMARINES SUR">
          MGO PASACAO, CAMARINES SUR
        </option>
        <option value="MGO PASIL, KALINGA">MGO PASIL, KALINGA</option>
        <option value="MGO PASTRANA, LEYTE">MGO PASTRANA, LEYTE</option>
        <option value="MGO PATEROS, NCR">MGO PATEROS, NCR</option>
        <option value="MGO PATIKUL, SULU">MGO PATIKUL, SULU</option>
        <option value="MGO PATNONGON, ANTIQUE">MGO PATNONGON, ANTIQUE</option>
        <option value="MGO PAVIA, ILOILO">MGO PAVIA, ILOILO</option>
        <option value="MGO PAYAO, ZAMBOANGA SIBUGAY">
          MGO PAYAO, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO PEÑARANDA, NUEVA ECIJA">
          MGO PEÑARANDA, NUEVA ECIJA
        </option>
        <option value="MGO PEÑARRUBIA, ABRA">MGO PEÑARRUBIA, ABRA</option>
        <option value="MGO PIAGAPO, LANAO DEL SUR">
          MGO PIAGAPO, LANAO DEL SUR
        </option>
        <option value="MGO PIDDIG, ILOCOS NORTE">
          MGO PIDDIG, ILOCOS NORTE
        </option>
        <option value="MGO PIGKAWAYAN, NORTH COTABATO">
          MGO PIGKAWAYAN, NORTH COTABATO
        </option>
        <option value="MGO PIKIT, NORTH COTABATO">
          MGO PIKIT, NORTH COTABATO
        </option>
        <option value="MGO PILA, LAGUNA">MGO PILA, LAGUNA</option>
        <option value="MGO PILAR, ABRA">MGO PILAR, ABRA</option>
        <option value="MGO PILAR, BATAAN">MGO PILAR, BATAAN</option>
        <option value="MGO PILAR, CAPIZ">MGO PILAR, CAPIZ</option>
        <option value="MGO PILAR, CEBU">MGO PILAR, CEBU</option>
        <option value="MGO PILAR, SORSOGON">MGO PILAR, SORSOGON</option>
        <option value="MGO PILI (CAPITAL), CAMARINES SUR">
          MGO PILI (CAPITAL), CAMARINES SUR
        </option>
        <option value="MGO PILILLA, RIZAL">MGO PILILLA, RIZAL</option>
        <option value="MGO PINABACDAO, SAMAR (WESTERN)">
          MGO PINABACDAO, SAMAR (WESTERN)
        </option>
        <option value="MGO PINAMALAYAN, ORIENTAL MINDORO">
          MGO PINAMALAYAN, ORIENTAL MINDORO
        </option>
        <option value="MGO PINAMUNGAJAN, CEBU">MGO PINAMUNGAJAN, CEBU</option>
        <option value="MGO PIÑAN (NEW PIÑAN), ZAMBOANGA DEL NORTE">
          MGO PIÑAN (NEW PIÑAN), ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO PINILI, ILOCOS NORTE">
          MGO PINILI, ILOCOS NORTE
        </option>
        <option value="MGO PINUKPUK, KALINGA">MGO PINUKPUK, KALINGA</option>
        <option value="MGO PITOGO, QUEZON">MGO PITOGO, QUEZON</option>
        <option value="MGO PITOGO, ZAMBOANGA DEL SUR">
          MGO PITOGO, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO PLACER, MASBATE">MGO PLACER, MASBATE</option>
        <option value="MGO PLACER, SURIGAO DEL NORTE">
          MGO PLACER, SURIGAO DEL NORTE
        </option>
        <option value="MGO PLARIDEL, MISAMIS OCCIDENTAL">
          MGO PLARIDEL, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO POLA, ORIENTAL MINDORO">
          MGO POLA, ORIENTAL MINDORO
        </option>
        <option value="MGO POLANCO, ZAMBOANGA DEL NORTE">
          MGO POLANCO, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO POLILLO, QUEZON">MGO POLILLO, QUEZON</option>
        <option value="MGO POLOMOLOK, SOUTH COTABATO">
          MGO POLOMOLOK, SOUTH COTABATO
        </option>
        <option value="MGO PONTEVEDRA, CAPIZ">MGO PONTEVEDRA, CAPIZ</option>
        <option value="MGO POONA PIAGAPO, LANAO DEL NORTE">
          MGO POONA PIAGAPO, LANAO DEL NORTE
        </option>
        <option value="MGO PORAC, PAMPANGA">MGO PORAC, PAMPANGA</option>
        <option value="MGO PORO, CEBU">MGO PORO, CEBU</option>
        <option value="MGO POTOTAN, ILOILO">MGO POTOTAN, ILOILO</option>
        <option value="MGO PRES. MANUEL A. ROXAS, ZAMBOANGA DEL NORTE">
          MGO PRES. MANUEL A. ROXAS, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO PRESENTACION (PARUBCAN), CAMARINES SUR">
          MGO PRESENTACION (PARUBCAN), CAMARINES SUR
        </option>
        <option value="MGO PRESIDENT QUIRINO, SULTAN KUDARAT">
          MGO PRESIDENT QUIRINO, SULTAN KUDARAT
        </option>
        <option value="MGO PRESIDENT ROXAS, CAPIZ">
          MGO PRESIDENT ROXAS, CAPIZ
        </option>
        <option value="MGO PRESIDENT ROXAS, NORTH COTABATO">
          MGO PRESIDENT ROXAS, NORTH COTABATO
        </option>
        <option value="MGO PRIETO DIAZ, SORSOGON">
          MGO PRIETO DIAZ, SORSOGON
        </option>
        <option value="MGO PUDTOL, APAYAO">MGO PUDTOL, APAYAO</option>
        <option value="MGO PUERTO GALERA, ORIENTAL MINDORO">
          MGO PUERTO GALERA, ORIENTAL MINDORO
        </option>
        <option value="MGO PULILAN, BULACAN">MGO PULILAN, BULACAN</option>
        <option value="MGO PULUPANDAN, NEGROS OCCIDENTAL">
          MGO PULUPANDAN, NEGROS OCCIDENTAL
        </option>
        <option value="MGO PURA, TARLAC">MGO PURA, TARLAC</option>
        <option value="MGO QUEZON, BUKIDNON">MGO QUEZON, BUKIDNON</option>
        <option value="MGO QUEZON, ISABELA">MGO QUEZON, ISABELA</option>
        <option value="MGO QUEZON, NUEVA ECIJA">MGO QUEZON, NUEVA ECIJA</option>
        <option value="MGO Quezon, Nueva Vizcaya">
          MGO Quezon, Nueva Vizcaya
        </option>
        <option value="MGO QUEZON, PALAWAN">MGO QUEZON, PALAWAN</option>
        <option value="MGO QUEZON, QUEZON">MGO QUEZON, QUEZON</option>
        <option value="MGO QUINAPONDAN, EASTERN SAMAR">
          MGO QUINAPONDAN, EASTERN SAMAR
        </option>
        <option value="MGO QUIRINO (ANGKAKI), ILOCOS SUR">
          MGO QUIRINO (ANGKAKI), ILOCOS SUR
        </option>
        <option value="MGO RAGAY, CAMARINES SUR">
          MGO RAGAY, CAMARINES SUR
        </option>
        <option value="MGO RAJAH BUAYAN, MAGUINDANAO">
          MGO RAJAH BUAYAN, MAGUINDANAO
        </option>
        <option value="MGO RAMON MAGSAYSAY (LIARGO), ZAMBOANGA DEL SUR">
          MGO RAMON MAGSAYSAY (LIARGO), ZAMBOANGA DEL SUR
        </option>
        <option value="MGO RAMON, ISABELA">MGO RAMON, ISABELA</option>
        <option value="MGO RAMOS, TARLAC">MGO RAMOS, TARLAC</option>
        <option value="MGO REAL, QUEZON">MGO REAL, QUEZON</option>
        <option value="MGO REMEDIOS T. ROMUALDEZ, AGUSAN DEL NORTE">
          MGO REMEDIOS T. ROMUALDEZ, AGUSAN DEL NORTE
        </option>
        <option value="MGO RIZAL (LIWAN), KALINGA">
          MGO RIZAL (LIWAN), KALINGA
        </option>
        <option value="MGO RIZAL (MARCOS), PALAWAN">
          MGO RIZAL (MARCOS), PALAWAN
        </option>
        <option value="MGO RIZAL, NUEVA ECIJA">MGO RIZAL, NUEVA ECIJA</option>
        <option value="MGO RIZAL, OCCIDENTAL MINDORO">
          MGO RIZAL, OCCIDENTAL MINDORO
        </option>
        <option value="MGO ROMBLON, ROMBLON">MGO ROMBLON, ROMBLON</option>
        <option value="MGO ROSALES, PANGASINAN">MGO ROSALES, PANGASINAN</option>
        <option value="MGO ROSARIO, AGUSAN DEL SUR">
          MGO ROSARIO, AGUSAN DEL SUR
        </option>
        <option value="MGO ROSARIO, BATANGAS">MGO ROSARIO, BATANGAS</option>
        <option value="MGO ROSARIO, CAVITE">MGO ROSARIO, CAVITE</option>
        <option value="MGO ROSARIO, LA UNION">MGO ROSARIO, LA UNION</option>
        <option value="MGO ROSARIO, NORTHERN SAMAR">
          MGO ROSARIO, NORTHERN SAMAR
        </option>
        <option value="MGO ROXAS, ISABELA">MGO ROXAS, ISABELA</option>
        <option value="MGO ROXAS, ORIENTAL MINDORO">
          MGO ROXAS, ORIENTAL MINDORO
        </option>
        <option value="MGO ROXAS, PALAWAN">MGO ROXAS, PALAWAN</option>
        <option value="MGO SABLAN, BENGUET">MGO SABLAN, BENGUET</option>
        <option value="MGO SABLAYAN, OCCIDENTAL MINDORO">
          MGO SABLAYAN, OCCIDENTAL MINDORO
        </option>
        <option value="MGO SABTANG, BATANES">MGO SABTANG, BATANES</option>
        <option value="MGO SADANGA, MOUNTAIN PROVINCE">
          MGO SADANGA, MOUNTAIN PROVINCE
        </option>
        <option value="MGO SAGADA, MOUNTAIN PROVINCE">
          MGO SAGADA, MOUNTAIN PROVINCE
        </option>
        <option value="MGO SAGAY, CAMIGUIN">MGO SAGAY, CAMIGUIN</option>
        <option value="MGO SAGÑAY, CAMARINES SUR">
          MGO SAGÑAY, CAMARINES SUR
        </option>
        <option value="MGO SALAY, MISAMIS ORIENTAL">
          MGO SALAY, MISAMIS ORIENTAL
        </option>
        <option value="MGO SALCEDO (BAUGEN), ILOCOS SUR">
          MGO SALCEDO (BAUGEN), ILOCOS SUR
        </option>
        <option value="MGO SALCEDO,EASTERN SAMAR">
          MGO SALCEDO,EASTERN SAMAR
        </option>
        <option value="MGO SALLAPADAN, ABRA">MGO SALLAPADAN, ABRA</option>
        <option value="MGO SALUG, ZAMBOANGA DEL NORTE">
          MGO SALUG, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO SALVADOR BENEDICTO, NEGROS OCCIDENTAL">
          MGO SALVADOR BENEDICTO, NEGROS OCCIDENTAL
        </option>
        <option value="MGO SAMAL, BATAAN">MGO SAMAL, BATAAN</option>
        <option value="MGO Sampaloc, Quezon">MGO Sampaloc, Quezon</option>
        <option value="MGO SAN AGUSTIN, ISABELA">
          MGO SAN AGUSTIN, ISABELA
        </option>
        <option value="MGO SAN AGUSTIN, ROMBLON">
          MGO SAN AGUSTIN, ROMBLON
        </option>
        <option value="MGO SAN AGUSTIN, SURIGAO DEL SUR">
          MGO SAN AGUSTIN, SURIGAO DEL SUR
        </option>
        <option value="MGO SAN ANDRES, ROMBLON">MGO SAN ANDRES, ROMBLON</option>
        <option value="MGO SAN ANTONIO, NUEVA ECIJA">
          MGO SAN ANTONIO, NUEVA ECIJA
        </option>
        <option value="MGO SAN ANTONIO, QUEZON">MGO SAN ANTONIO, QUEZON</option>
        <option value="MGO SAN ANTONIO, ZAMBALES">
          MGO SAN ANTONIO, ZAMBALES
        </option>
        <option value="MGO SAN BENITO, SURIGAO DEL NORTE">
          MGO SAN BENITO, SURIGAO DEL NORTE
        </option>
        <option value="MGO SAN CLEMENTE, TARLAC">
          MGO SAN CLEMENTE, TARLAC
        </option>
        <option value="MGO SAN DIONISIO, ILOILO">
          MGO SAN DIONISIO, ILOILO
        </option>
        <option value="MGO SAN EMILIO, ILOCOS SUR">
          MGO SAN EMILIO, ILOCOS SUR
        </option>
        <option value="MGO SAN ENRIQUE, ILOILO">MGO SAN ENRIQUE, ILOILO</option>
        <option value="MGO SAN ENRIQUE, NEGROS OCCIDENTAL">
          MGO SAN ENRIQUE, NEGROS OCCIDENTAL
        </option>
        <option value="MGO SAN ESTEBAN, ILOCOS SUR">
          MGO SAN ESTEBAN, ILOCOS SUR
        </option>
        <option value="MGO SAN FABIAN, PANGASINAN">
          MGO SAN FABIAN, PANGASINAN
        </option>
        <option value="MGO SAN FERNANDO, BUKIDNON">
          MGO SAN FERNANDO, BUKIDNON
        </option>
        <option value="MGO SAN FERNANDO, CAMARINES SUR">
          MGO SAN FERNANDO, CAMARINES SUR
        </option>
        <option value="MGO SAN FERNANDO, MASBATE">
          MGO SAN FERNANDO, MASBATE
        </option>
        <option value="MGO SAN FERNANDO, ROMBLON">
          MGO SAN FERNANDO, ROMBLON
        </option>
        <option value="MGO SAN FRANCISCO (ANAO-AON), SURIGAO DEL NORTE">
          MGO SAN FRANCISCO (ANAO-AON), SURIGAO DEL NORTE
        </option>
        <option value="MGO SAN FRANCISCO, AGUSAN DEL SUR">
          MGO SAN FRANCISCO, AGUSAN DEL SUR
        </option>
        <option value="MGO SAN FRANCISCO, CEBU">MGO SAN FRANCISCO, CEBU</option>
        <option value="MGO SAN FRANCISCO, QUEZON">
          MGO SAN FRANCISCO, QUEZON
        </option>
        <option value="MGO SAN GABRIEL, LA UNION">
          MGO SAN GABRIEL, LA UNION
        </option>
        <option value="MGO SAN GUILLERMO, ISABELA">
          MGO SAN GUILLERMO, ISABELA
        </option>
        <option value="MGO SAN ILDEFONSO, BULACAN">
          MGO SAN ILDEFONSO, BULACAN
        </option>
        <option value="MGO SAN ISIDRO, ABRA">MGO SAN ISIDRO, ABRA</option>
        <option value="MGO SAN ISIDRO, ISABELA">MGO SAN ISIDRO, ISABELA</option>
        <option value="MGO SAN ISIDRO, LEYTE">MGO SAN ISIDRO, LEYTE</option>
        <option value="MGO SAN ISIDRO, NORTHERN SAMAR">
          MGO SAN ISIDRO, NORTHERN SAMAR
        </option>
        <option value="MGO SAN ISIDRO, NUEVA ECIJA">
          MGO SAN ISIDRO, NUEVA ECIJA
        </option>
        <option value="MGO SAN ISIDRO, SURIGAO DEL NORTE">
          MGO SAN ISIDRO, SURIGAO DEL NORTE
        </option>
        <option value="MGO SAN JACINTO, MASBATE">
          MGO SAN JACINTO, MASBATE
        </option>
        <option value="MGO SAN JACINTO, PANGASINAN">
          MGO SAN JACINTO, PANGASINAN
        </option>
        <option value="MGO SAN JOAQUIN, ILOILO">MGO SAN JOAQUIN, ILOILO</option>
        <option value="MGO SAN JORGE, SAMAR (WESTERN)">
          MGO SAN JORGE, SAMAR (WESTERN)
        </option>
        <option value="MGO SAN JOSE DE BUAN, SAMAR (WESTERN)">
          MGO SAN JOSE DE BUAN, SAMAR (WESTERN)
        </option>
        <option value="MGO SAN JOSE, ANTIQUE">MGO SAN JOSE, ANTIQUE</option>
        <option value="MGO SAN JOSE, BATANGAS">MGO SAN JOSE, BATANGAS</option>
        <option value="MGO SAN JOSE, CAMARINES SUR">
          MGO SAN JOSE, CAMARINES SUR
        </option>
        <option value="MGO SAN JOSE, DINAGAT ISLAND">
          MGO SAN JOSE, DINAGAT ISLAND
        </option>
        <option value="MGO SAN JOSE, NEGROS ORIENTAL">
          MGO SAN JOSE, NEGROS ORIENTAL
        </option>
        <option value="MGO SAN JOSE, NORTHERN SAMAR">
          MGO SAN JOSE, NORTHERN SAMAR
        </option>
        <option value="MGO SAN JOSE, OCCIDENTAL MINDORO">
          MGO SAN JOSE, OCCIDENTAL MINDORO
        </option>
        <option value="MGO SAN JOSE, TARLAC">MGO SAN JOSE, TARLAC</option>
        <option value="MGO SAN JUAN (CABALIAN), SOUTHERN LEYTE">
          MGO SAN JUAN (CABALIAN), SOUTHERN LEYTE
        </option>
        <option value="MGO SAN JUAN (LAPOG), ILOCOS SUR">
          MGO SAN JUAN (LAPOG), ILOCOS SUR
        </option>
        <option value="MGO SAN JUAN, BATANGAS">MGO SAN JUAN, BATANGAS</option>
        <option value="MGO SAN JUAN, SIQUIJOR">MGO SAN JUAN, SIQUIJOR</option>
        <option value="MGO SAN LEONARDO, NUEVA ECIJA">
          MGO SAN LEONARDO, NUEVA ECIJA
        </option>
        <option value="MGO SAN LORENZO RUIZ (IMELDA), CAMARINES NORTE">
          MGO SAN LORENZO RUIZ (IMELDA), CAMARINES NORTE
        </option>
        <option value="MGO SAN LORENZO, GUIMARAS">
          MGO SAN LORENZO, GUIMARAS
        </option>
        <option value="MGO SAN LUIS, AGUSAN DEL SUR">
          MGO SAN LUIS, AGUSAN DEL SUR
        </option>
        <option value="MGO SAN LUIS, AURORA">MGO SAN LUIS, AURORA</option>
        <option value="MGO SAN LUIS, BATANGAS">MGO SAN LUIS, BATANGAS</option>
        <option value="MGO SAN LUIS, PAMPANGA">MGO SAN LUIS, PAMPANGA</option>
        <option value="MGO SAN MANUEL, PANGASINAN">
          MGO SAN MANUEL, PANGASINAN
        </option>
        <option value="MGO SAN MANUEL, TARLAC">MGO SAN MANUEL, TARLAC</option>
        <option value="MGO SAN MARCELINO, ZAMBALES">
          MGO SAN MARCELINO, ZAMBALES
        </option>
        <option value="MGO SAN MARIANO, ISABELA">
          MGO SAN MARIANO, ISABELA
        </option>
        <option value="MGO SAN MATEO, ISABELA">MGO SAN MATEO, ISABELA</option>
        <option value="MGO SAN MATEO, RIZAL">MGO SAN MATEO, RIZAL</option>
        <option value="MGO SAN MIGUEL, BOHOL">MGO SAN MIGUEL, BOHOL</option>
        <option value="MGO SAN MIGUEL, BULACAN">MGO SAN MIGUEL, BULACAN</option>
        <option value="MGO SAN MIGUEL, CATANDUANES">
          MGO SAN MIGUEL, CATANDUANES
        </option>
        <option value="MGO SAN MIGUEL, LEYTE">MGO SAN MIGUEL, LEYTE</option>
        <option value="MGO SAN MIGUEL, SURIGAO DEL SUR">
          MGO SAN MIGUEL, SURIGAO DEL SUR
        </option>
        <option value="MGO SAN MIGUEL, ZAMBOANGA DEL SUR">
          MGO SAN MIGUEL, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO SAN NARCISO, QUEZON">MGO SAN NARCISO, QUEZON</option>
        <option value="MGO SAN NARCISO, ZAMBALES">
          MGO SAN NARCISO, ZAMBALES
        </option>
        <option value="MGO SAN NICOLAS, BATANGAS">
          MGO SAN NICOLAS, BATANGAS
        </option>
        <option value="MGO SAN NICOLAS, ILOCOS NORTE">
          MGO SAN NICOLAS, ILOCOS NORTE
        </option>
        <option value="MGO SAN PABLO, ZAMBOANGA DEL SUR">
          MGO SAN PABLO, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO SAN PASCUAL, BATANGAS">
          MGO SAN PASCUAL, BATANGAS
        </option>
        <option value="MGO SAN PASCUAL, MASBATE">
          MGO SAN PASCUAL, MASBATE
        </option>
        <option value="MGO SAN POLICARPO, EASTERN SAMAR">
          MGO SAN POLICARPO, EASTERN SAMAR
        </option>
        <option value="MGO SAN QUINTIN, ABRA">MGO SAN QUINTIN, ABRA</option>
        <option value="MGO SAN QUINTIN, PANGASINAN">
          MGO SAN QUINTIN, PANGASINAN
        </option>
        <option value="MGO SAN RAFAEL, BULACAN">MGO SAN RAFAEL, BULACAN</option>
        <option value="MGO SAN RAFAEL, ILOILO">MGO SAN RAFAEL, ILOILO</option>
        <option value="MGO SAN REMIGIO, ANTIQUE">
          MGO SAN REMIGIO, ANTIQUE
        </option>
        <option value="MGO SAN REMIGIO, CEBU">MGO SAN REMIGIO, CEBU</option>
        <option value="MGO SAN SEBASTIAN, SAMAR (WESTERN)">
          MGO SAN SEBASTIAN, SAMAR (WESTERN)
        </option>
        <option value="MGO SAN SIMON, PAMPANGA">MGO SAN SIMON, PAMPANGA</option>
        <option value="MGO SAN TEODORO, ORIENTAL MINDORO">
          MGO SAN TEODORO, ORIENTAL MINDORO
        </option>
        <option value="MGO SAN VICENTE, CAMARINES NORTE">
          MGO SAN VICENTE, CAMARINES NORTE
        </option>
        <option value="MGO SAN VICENTE, ILOCOS SUR">
          MGO SAN VICENTE, ILOCOS SUR
        </option>
        <option value="MGO SAN VICENTE, PALAWAN">
          MGO SAN VICENTE, PALAWAN
        </option>
        <option value="MGO SANCHEZ-MIRA, CAGAYAN">
          MGO SANCHEZ-MIRA, CAGAYAN
        </option>
        <option value="MGO SANTA ANA, CAGAYAN">MGO SANTA ANA, CAGAYAN</option>
        <option value="MGO SANTA ANA, PAMPANGA">MGO SANTA ANA, PAMPANGA</option>
        <option value="MGO SANTA BARBARA, ILOILO">
          MGO SANTA BARBARA, ILOILO
        </option>
        <option value="MGO SANTA BARBARA, PANGASINAN">
          MGO SANTA BARBARA, PANGASINAN
        </option>
        <option value="MGO SANTA CATALINA, ILOCOS SUR">
          MGO SANTA CATALINA, ILOCOS SUR
        </option>
        <option value="MGO SANTA CATALINA, NEGROS ORIENTAL">
          MGO SANTA CATALINA, NEGROS ORIENTAL
        </option>
        <option value="MGO SANTA CRUZ (CAPITAL), LAGUNA">
          MGO SANTA CRUZ (CAPITAL), LAGUNA
        </option>
        <option value="MGO SANTA CRUZ, DAVAO DEL SUR">
          MGO SANTA CRUZ, DAVAO DEL SUR
        </option>
        <option value="MGO SANTA CRUZ, ILOCOS SUR">
          MGO SANTA CRUZ, ILOCOS SUR
        </option>
        <option value="MGO SANTA CRUZ, MARINDUQUE">
          MGO SANTA CRUZ, MARINDUQUE
        </option>
        <option value="MGO SANTA CRUZ, OCCIDENTAL MINDORO">
          MGO SANTA CRUZ, OCCIDENTAL MINDORO
        </option>
        <option value="MGO SANTA CRUZ, ZAMBALES">
          MGO SANTA CRUZ, ZAMBALES
        </option>
        <option value="MGO SANTA FE, CEBU">MGO SANTA FE, CEBU</option>
        <option value="MGO SANTA FE, LEYTE">MGO SANTA FE, LEYTE</option>
        <option value="MGO SANTA FE, NUEVA VIZCAYA">
          MGO SANTA FE, NUEVA VIZCAYA
        </option>
        <option value="MGO SANTA FE, ROMBLON">MGO SANTA FE, ROMBLON</option>
        <option value="MGO SANTA LUCIA, ILOCOS SUR">
          MGO SANTA LUCIA, ILOCOS SUR
        </option>
        <option value="MGO SANTA MAGDALENA, SORSOGON">
          MGO SANTA MAGDALENA, SORSOGON
        </option>
        <option value="MGO SANTA MARIA (IMELDA), ROMBLON">
          MGO SANTA MARIA (IMELDA), ROMBLON
        </option>
        <option value="MGO SANTA MARIA, BULACAN">
          MGO SANTA MARIA, BULACAN
        </option>
        <option value="MGO SANTA MARIA, ISABELA">
          MGO SANTA MARIA, ISABELA
        </option>
        <option value="MGO SANTA MARIA, LAGUNA">MGO SANTA MARIA, LAGUNA</option>
        <option value="MGO SANTA MARIA, PANGASINAN">
          MGO SANTA MARIA, PANGASINAN
        </option>
        <option value="MGO SANTA PRAXEDES, CAGAYAN">
          MGO SANTA PRAXEDES, CAGAYAN
        </option>
        <option value="MGO SANTA ROSA, NUEVA ECIJA">
          MGO SANTA ROSA, NUEVA ECIJA
        </option>
        <option value="MGO SANTA TERESITA, BATANGAS">
          MGO SANTA TERESITA, BATANGAS
        </option>
        <option value="MGO SANTA TERESITA, CAGAYAN">
          MGO SANTA TERESITA, CAGAYAN
        </option>
        <option value="MGO SANTA, ILOCOS SUR">MGO SANTA, ILOCOS SUR</option>
        <option value="MGO SANTIAGO, AGUSAN DEL NORTE">
          MGO SANTIAGO, AGUSAN DEL NORTE
        </option>
        <option value="MGO SANTO DOMINGO, NUEVA ECIJA">
          MGO SANTO DOMINGO, NUEVA ECIJA
        </option>
        <option value="MGO SANTO NIÑO (FAIRE), CAGAYAN">
          MGO SANTO NIÑO (FAIRE), CAGAYAN
        </option>
        <option value="MGO SANTO NIÑO, SAMAR (WESTERN)">
          MGO SANTO NIÑO, SAMAR (WESTERN)
        </option>
        <option value="MGO SANTO NIÑO, SOUTH COTABATO">
          MGO SANTO NIÑO, SOUTH COTABATO
        </option>
        <option value="MGO SANTO TOMAS, DAVAO DEL NORTE">
          MGO SANTO TOMAS, DAVAO DEL NORTE
        </option>
        <option value="MGO SANTO TOMAS, PAMPANGA">
          MGO SANTO TOMAS, PAMPANGA
        </option>
        <option value="MGO SANTO TOMAS, PANGASINAN">
          MGO SANTO TOMAS, PANGASINAN
        </option>
        <option value="MGO SANTOL, LA UNION">MGO SANTOL, LA UNION</option>
        <option value="MGO SAPA-SAPA, TAWI-TAWI">
          MGO SAPA-SAPA, TAWI-TAWI
        </option>
        <option value="MGO SAPAD, LANAO DEL NORTE">
          MGO SAPAD, LANAO DEL NORTE
        </option>
        <option value="MGO SAPANG DALAGA, MISAMIS OCCIDENTAL">
          MGO SAPANG DALAGA, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO SAPI-AN, CAPIZ">MGO SAPI-AN, CAPIZ</option>
        <option value="MGO SARA, ILOILO">MGO SARA, ILOILO</option>
        <option value="MGO SARANGANI, DAVAO DEL SUR">
          MGO SARANGANI, DAVAO DEL SUR
        </option>
        <option value="MGO SARIAYA, QUEZON">MGO SARIAYA, QUEZON</option>
        <option value="MGO SARRAT, ILOCOS NORTE">
          MGO SARRAT, ILOCOS NORTE
        </option>
        <option value="MGO SEN. NINOY AQUINO, SULTAN KUDARAT">
          MGO SEN. NINOY AQUINO, SULTAN KUDARAT
        </option>
        <option value="MGO SERGIO OSMEÑA SR, ZAMBOANGA DEL NORTE">
          MGO SERGIO OSMEÑA SR, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO SEVILLA, BOHOL">MGO SEVILLA, BOHOL</option>
        <option value="MGO SHARIFF AGUAK (MAGANOY) (CAPITAL), MAGUINDANAO">
          MGO SHARIFF AGUAK (MAGANOY) (CAPITAL), MAGUINDANAO
        </option>
        <option value="MGO SHARIFF AGUAK, MAGUINDANAO">
          MGO SHARIFF AGUAK, MAGUINDANAO
        </option>
        <option value="MGO SHARIFF SAYDONA, MAGUINDANAO">
          MGO SHARIFF SAYDONA, MAGUINDANAO
        </option>
        <option value="MGO SIASI, SULU">MGO SIASI, SULU</option>
        <option value="MGO SIATON, NEGROS ORIENTAL">
          MGO SIATON, NEGROS ORIENTAL
        </option>
        <option value="MGO SIBAGAT, AGUSAN DEL SUR">
          MGO SIBAGAT, AGUSAN DEL SUR
        </option>
        <option value="MGO SIBALOM, ANTIQUE">MGO SIBALOM, ANTIQUE</option>
        <option value="MGO SIBONGA, CEBU">MGO SIBONGA, CEBU</option>
        <option value="MGO SIBUCO, ZAMBOANGA DEL NORTE">
          MGO SIBUCO, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO SIBULAN, NEGROS ORIENTAL">
          MGO SIBULAN, NEGROS ORIENTAL
        </option>
        <option value="MGO SIBUNAG, GUIMARAS">MGO SIBUNAG, GUIMARAS</option>
        <option value="MGO SIBUTAD, ZAMBOANGA DEL NORTE">
          MGO SIBUTAD, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO SIBUTU, TAWI-TAWI">MGO SIBUTU, TAWI-TAWI</option>
        <option value="MGO SIGMA, CAPIZ">MGO SIGMA, CAPIZ</option>
        <option value="MGO SIKATUNA, BOHOL">MGO SIKATUNA, BOHOL</option>
        <option value="MGO SILAGO, SOUTHERN LEYTE">
          MGO SILAGO, SOUTHERN LEYTE
        </option>
        <option value="MGO SILANG, CAVITE">MGO SILANG, CAVITE</option>
        <option value="MGO SILVINO LOBOS, NORTHERN SAMAR">
          MGO SILVINO LOBOS, NORTHERN SAMAR
        </option>
        <option value="MGO SIMUNUL, TAWI-TAWI">MGO SIMUNUL, TAWI-TAWI</option>
        <option value="MGO SINACABAN, MISAMIS OCCIDENTAL">
          MGO SINACABAN, MISAMIS OCCIDENTAL
        </option>
        <option value="MGO SINAIT, ILOCOS SUR">MGO SINAIT, ILOCOS SUR</option>
        <option value="MGO SINILOAN, LAGUNA">MGO SINILOAN, LAGUNA</option>
        <option value="MGO SIOCON, ZAMBOANGA DEL NORTE">
          MGO SIOCON, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO SIPOCOT, CAMARINES SUR">
          MGO SIPOCOT, CAMARINES SUR
        </option>
        <option value="MGO SIQUIJOR (CAPITAL), SIQUIJOR">
          MGO SIQUIJOR (CAPITAL), SIQUIJOR
        </option>
        <option value="MGO SIRAWAI, ZAMBOANGA DEL NORTE">
          MGO SIRAWAI, ZAMBOANGA DEL NORTE
        </option>
        <option value="MGO SIRUMA, CAMARINES SUR">
          MGO SIRUMA, CAMARINES SUR
        </option>
        <option value="MGO SISON, PANGASINAN">MGO SISON, PANGASINAN</option>
        <option value="MGO SOCORRO, ORIENTAL MINDORO">
          MGO SOCORRO, ORIENTAL MINDORO
        </option>
        <option value="MGO SOCORRO, SURIGAO DEL NORTE">
          MGO SOCORRO, SURIGAO DEL NORTE
        </option>
        <option value="MGO SOFRONIO ESPANOLA, PALAWAN">
          MGO SOFRONIO ESPANOLA, PALAWAN
        </option>
        <option value="MGO SOGOD, CEBU">MGO SOGOD, CEBU</option>
        <option value="MGO SOGOD, SOUTHERN LEYTE">
          MGO SOGOD, SOUTHERN LEYTE
        </option>
        <option value="MGO SOLANO, NUEVA VIZCAYA">
          MGO SOLANO, NUEVA VIZCAYA
        </option>
        <option value="MGO SOLSONA, ILOCOS NORTE">
          MGO SOLSONA, ILOCOS NORTE
        </option>
        <option value="MGO SOMINOT (DON MARIANO MARCOS), ZAMBOANGA DEL SUR">
          MGO SOMINOT (DON MARIANO MARCOS), ZAMBOANGA DEL SUR
        </option>
        <option value="MGO SOUTH UBIAN, TAWI-TAWI">
          MGO SOUTH UBIAN, TAWI-TAWI
        </option>
        <option value="MGO SOUTH UPI, MAGUINDANAO">
          MGO SOUTH UPI, MAGUINDANAO
        </option>
        <option value="MGO SUAL, PANGASINAN">MGO SUAL, PANGASINAN</option>
        <option value="MGO SUBIC, ZAMBALES">MGO SUBIC, ZAMBALES</option>
        <option value="MGO SUGBONGCOGON, MISAMIS ORIENTAL">
          MGO SUGBONGCOGON, MISAMIS ORIENTAL
        </option>
        <option value="MGO SULAT, EASTERN SAMAR">
          MGO SULAT, EASTERN SAMAR
        </option>
        <option value="MGO SULOP, DAVAO DEL SUR">
          MGO SULOP, DAVAO DEL SUR
        </option>
        <option value="MGO SULTAN KUDARAT (NULING), MAGUINDANAO">
          MGO SULTAN KUDARAT (NULING), MAGUINDANAO
        </option>
        <option value="MGO SUMILAO, BUKIDNON">MGO SUMILAO, BUKIDNON</option>
        <option value="MGO SUMISIP, BASILAN">MGO SUMISIP, BASILAN</option>
        <option value="MGO SURALLAH, SOUTH COTABATO">
          MGO SURALLAH, SOUTH COTABATO
        </option>
        <option value="MGO SUYO, ILOCOS SUR">MGO SUYO, ILOCOS SUR</option>
        <option value="MGO T BOLI, SOUTH COTABATO">
          MGO T BOLI, SOUTH COTABATO
        </option>
        <option value="MGO TAAL, BATANGAS">MGO TAAL, BATANGAS</option>
        <option value="MGO TABANGO, LEYTE">MGO TABANGO, LEYTE</option>
        <option value="MGO TABINA, ZAMBOANGA DEL SUR">
          MGO TABINA, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO TABOGON, CEBU">MGO TABOGON, CEBU</option>
        <option value="MGO TABUAN-LASA, BASILAN">
          MGO TABUAN-LASA, BASILAN
        </option>
        <option value="MGO TADIAN, MOUNTAIN PROVINCE">
          MGO TADIAN, MOUNTAIN PROVINCE
        </option>
        <option value="MGO TAFT, EASTERN SAMAR">MGO TAFT, EASTERN SAMAR</option>
        <option value="MGO TAGANA-AN, SURIGAO DEL NORTE">
          MGO TAGANA-AN, SURIGAO DEL NORTE
        </option>
        <option value="MGO TAGBINA, SURIGAO DEL SUR">
          MGO TAGBINA, SURIGAO DEL SUR
        </option>
        <option value="MGO TAGKAWAYAN, QUEZON">MGO TAGKAWAYAN, QUEZON</option>
        <option value="MGO TAGO, SURIGAO DEL SUR">
          MGO TAGO, SURIGAO DEL SUR
        </option>
        <option value="MGO TAGOLOAN, MISAMIS ORIENTAL">
          MGO TAGOLOAN, MISAMIS ORIENTAL
        </option>
        <option value="MGO TAGUDIN, ILOCOS SUR">MGO TAGUDIN, ILOCOS SUR</option>
        <option value="MGO TALACOGON, AGUSAN DEL SUR">
          MGO TALACOGON, AGUSAN DEL SUR
        </option>
        <option value="MGO TALAINGOD, DAVAO DEL NORTE">
          MGO TALAINGOD, DAVAO DEL NORTE
        </option>
        <option value="MGO TALAKAG, BUKIDNON">MGO TALAKAG, BUKIDNON</option>
        <option value="MGO TALAYAN, MAGUINDANAO">
          MGO TALAYAN, MAGUINDANAO
        </option>
        <option value="MGO TALIBON, BOHOL">MGO TALIBON, BOHOL</option>
        <option value="MGO TALIPAO, SULU">MGO TALIPAO, SULU</option>
        <option value="MGO TALISAY, BATANGAS">MGO TALISAY, BATANGAS</option>
        <option value="MGO TALISAYAN, MISAMIS ORIENTAL">
          MGO TALISAYAN, MISAMIS ORIENTAL
        </option>
        <option value="MGO TALITAY, MAGUINDANAO">
          MGO TALITAY, MAGUINDANAO
        </option>
        <option value="MGO TALUGTUG, NUEVA ECIJA">
          MGO TALUGTUG, NUEVA ECIJA
        </option>
        <option value="MGO TAMBULIG, ZAMBOANGA DEL SUR">
          MGO TAMBULIG, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO TAMPAKAN, SOUTH COTABATO">
          MGO TAMPAKAN, SOUTH COTABATO
        </option>
        <option value="MGO TANAUAN, LEYTE">MGO TANAUAN, LEYTE</option>
        <option value="MGO TANAY, RIZAL">MGO TANAY, RIZAL</option>
        <option value="MGO TANDUBAS, TAWI-TAWI">MGO TANDUBAS, TAWI-TAWI</option>
        <option value="MGO TANGALAN, AKLAN">MGO TANGALAN, AKLAN</option>
        <option value="MGO TANGCAL, LANAO DEL NORTE">
          MGO TANGCAL, LANAO DEL NORTE
        </option>
        <option value="MGO TANUDAN, KALINGA">MGO TANUDAN, KALINGA</option>
        <option value="MGO TANZA, CAVITE">MGO TANZA, CAVITE</option>
        <option value="MGO TAPAZ, CAPIZ">MGO TAPAZ, CAPIZ</option>
        <option value="MGO TAPUL, SULU">MGO TAPUL, SULU</option>
        <option value="MGO TARAKA, LANAO DEL SUR">
          MGO TARAKA, LANAO DEL SUR
        </option>
        <option value="MGO TARANGNAN, SAMAR (WESTERN)">
          MGO TARANGNAN, SAMAR (WESTERN)
        </option>
        <option value="MGO TAYASAN, NEGROS ORIENTAL">
          MGO TAYASAN, NEGROS ORIENTAL
        </option>
        <option value="MGO TAYSAN, BATANGAS">MGO TAYSAN, BATANGAS</option>
        <option value="MGO TAYTAY, PALAWAN">MGO TAYTAY, PALAWAN</option>
        <option value="MGO TAYTAY, RIZAL">MGO TAYTAY, RIZAL</option>
        <option value="MGO TAYUG, PANGASINAN">MGO TAYUG, PANGASINAN</option>
        <option value="MGO TERESA, RIZAL">MGO TERESA, RIZAL</option>
        <option value="MGO TERNATE, CAVITE">MGO TERNATE, CAVITE</option>
        <option value="MGO TIAONG, QUEZON">MGO TIAONG, QUEZON</option>
        <option value="MGO TIBIAO, ANTIQUE">MGO TIBIAO, ANTIQUE</option>
        <option value="MGO TIGBAO, ZAMBOANGA DEL SUR">
          MGO TIGBAO, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO TIGBAUAN, ILOILO">MGO TIGBAUAN, ILOILO</option>
        <option value="MGO TINAMBAC, CAMARINES SUR">
          MGO TINAMBAC, CAMARINES SUR
        </option>
        <option value="MGO TINEG, ABRA">MGO TINEG, ABRA</option>
        <option value="MGO TINGLAYAN, KALINGA">MGO TINGLAYAN, KALINGA</option>
        <option value="MGO TINGLOY, BATANGAS">MGO TINGLOY, BATANGAS</option>
        <option value="MGO TINOC, IFUGAO">MGO TINOC, IFUGAO</option>
        <option value="MGO TIPO-TIPO, BASILAN">MGO TIPO-TIPO, BASILAN</option>
        <option value="MGO TITAY, ZAMBOANGA SIBUGAY">
          MGO TITAY, ZAMBOANGA SIBUGAY
        </option>
        <option value="MGO TOBIAS FORNIER (DAO), ANTIQUE">
          MGO TOBIAS FORNIER (DAO), ANTIQUE
        </option>
        <option value="MGO TOBOSO, NEGROS OCCIDENTAL">
          MGO TOBOSO, NEGROS OCCIDENTAL
        </option>
        <option value="MGO TOMAS OPPUS, SOUTHERN LEYTE">
          MGO TOMAS OPPUS, SOUTHERN LEYTE
        </option>
        <option value="MGO TONGKIL, SULU">MGO TONGKIL, SULU</option>
        <option value="MGO TORRIJOS, MARINDUQUE">
          MGO TORRIJOS, MARINDUQUE
        </option>
        <option value="MGO TRENTO, AGUSAN DEL SUR">
          MGO TRENTO, AGUSAN DEL SUR
        </option>
        <option value="MGO TRINIDAD, BOHOL">MGO TRINIDAD, BOHOL</option>
        <option value="MGO TUAO, CAGAYAN">MGO TUAO, CAGAYAN</option>
        <option value="MGO TUBA, BENGUET">MGO TUBA, BENGUET</option>
        <option value="MGO TUBAJON, DINAGAT ISLAND">
          MGO TUBAJON, DINAGAT ISLAND
        </option>
        <option value="MGO TUBAY, AGUSAN DEL NORTE">
          MGO TUBAY, AGUSAN DEL NORTE
        </option>
        <option value="MGO TUBIGON, BOHOL">MGO TUBIGON, BOHOL</option>
        <option value="MGO TUBLAY, BENGUET">MGO TUBLAY, BENGUET</option>
        <option value="MGO TUBO, ABRA">MGO TUBO, ABRA</option>
        <option value="MGO TUBOD (CAPITAL), LANAO DEL NORTE">
          MGO TUBOD (CAPITAL), LANAO DEL NORTE
        </option>
        <option value="MGO TUBOD, SURIGAO DEL NORTE">
          MGO TUBOD, SURIGAO DEL NORTE
        </option>
        <option value="MGO TUBUNGAN, ILOILO">MGO TUBUNGAN, ILOILO</option>
        <option value="MGO TUBURAN, BASILAN">MGO TUBURAN, BASILAN</option>
        <option value="MGO TUBURAN, CEBU">MGO TUBURAN, CEBU</option>
        <option value="MGO TUDELA, CEBU">MGO TUDELA, CEBU</option>
        <option value="MGO TUKURAN, ZAMBOANGA DEL SUR">
          MGO TUKURAN, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO TULUNAN, NORTH COTABATO">
          MGO TULUNAN, NORTH COTABATO
        </option>
        <option value="MGO TUMAUINI, ISABELA">MGO TUMAUINI, ISABELA</option>
        <option value="MGO TUNGA, LEYTE">MGO TUNGA, LEYTE</option>
        <option value="MGO TUPI, SOUTH COTABATO">
          MGO TUPI, SOUTH COTABATO
        </option>
        <option value="MGO TUY, BATANGAS">MGO TUY, BATANGAS</option>
        <option value="MGO UBAY, BOHOL">MGO UBAY, BOHOL</option>
        <option value="MGO UMINGAN, PANGASINAN">MGO UMINGAN, PANGASINAN</option>
        <option value="MGO UNGKAYA PUKAN, BASILAN">
          MGO UNGKAYA PUKAN, BASILAN
        </option>
        <option value="MGO UNISAN, QUEZON">MGO UNISAN, QUEZON</option>
        <option value="MGO UPI, MAGUINDANAO">MGO UPI, MAGUINDANAO</option>
        <option value="MGO URBIZTONDO, PANGASINAN">
          MGO URBIZTONDO, PANGASINAN
        </option>
        <option value="MGO USON, MASBATE">MGO USON, MASBATE</option>
        <option value="MGO UYUGAN, BATANES">MGO UYUGAN, BATANES</option>
        <option value="MGO VALDERAMA, ANTIQUE">MGO VALDERAMA, ANTIQUE</option>
        <option value="MGO VALENCIA (LUZURRIAGA), NEGROS ORIENTAL">
          MGO VALENCIA (LUZURRIAGA), NEGROS ORIENTAL
        </option>
        <option value="MGO VALENCIA, BOHOL">MGO VALENCIA, BOHOL</option>
        <option value="MGO VERUELA, AGUSAN DEL SUR">
          MGO VERUELA, AGUSAN DEL SUR
        </option>
        <option value="MGO VICTORIA, NORTHERN SAMAR">
          MGO VICTORIA, NORTHERN SAMAR
        </option>
        <option value="MGO VICTORIA, ORIENTAL MINDORO">
          MGO VICTORIA, ORIENTAL MINDORO
        </option>
        <option value="MGO VICTORIA, TARLAC">MGO VICTORIA, TARLAC</option>
        <option value="MGO VIGA, CATANDUANES">MGO VIGA, CATANDUANES</option>
        <option value="MGO VILLANUEVA, MISAMIS ORIENTAL">
          MGO VILLANUEVA, MISAMIS ORIENTAL
        </option>
        <option value="MGO VILLAREAL, SAMAR (WESTERN)">
          MGO VILLAREAL, SAMAR (WESTERN)
        </option>
        <option value="MGO VILLASIS, PANGASINAN">
          MGO VILLASIS, PANGASINAN
        </option>
        <option value="MGO VILLAVERDE, NUEVA VIZCAYA">
          MGO VILLAVERDE, NUEVA VIZCAYA
        </option>
        <option value="MGO VILLAVICIOSA, ABRA">MGO VILLAVICIOSA, ABRA</option>
        <option value="MGO VINCENZO Z SAGUN, ZAMBOANGA DEL SUR">
          MGO VINCENZO Z SAGUN, ZAMBOANGA DEL SUR
        </option>
        <option value="MGO VINTAR, ILOCOS NORTE">
          MGO VINTAR, ILOCOS NORTE
        </option>
        <option value="MGO VINZONS, CAMARINES NORTE">
          MGO VINZONS, CAMARINES NORTE
        </option>
        <option value="MGO VIRAC (CAPITAL), CATANDUANES">
          MGO VIRAC (CAPITAL), CATANDUANES
        </option>
        <option value="MGO ZAMBOANGUITA, NEGROS ORIENTAL">
          MGO ZAMBOANGUITA, NEGROS ORIENTAL
        </option>
        <option value="MGO ZARAGOZA, NUEVA ECIJA">
          MGO ZARAGOZA, NUEVA ECIJA
        </option>
        <option value="MGO ZARRAGA, ILOILO">MGO ZARRAGA, ILOILO</option>
        <option value="MGO ZUMARRAGA, SAMAR (WESTERN)">
          MGO ZUMARRAGA, SAMAR (WESTERN)
        </option>
        <option value="MINDANAO DEVELOPMENT AUTHORITY">
          MINDANAO DEVELOPMENT AUTHORITY
        </option>
        <option value="MINDANAO STATE UNIVERSITY">
          MINDANAO STATE UNIVERSITY
        </option>
        <option value="MINDANAO STATE UNIVERSITY (GENERAL SANTOS CAMPUS)">
          MINDANAO STATE UNIVERSITY (GENERAL SANTOS CAMPUS)
        </option>
        <option value="MINDANAO STATE UNIVERSITY (MAGUINDANAO)">
          MINDANAO STATE UNIVERSITY (MAGUINDANAO)
        </option>
        <option value="MINDANAO STATE UNIVERSITY (NAAWAN)">
          MINDANAO STATE UNIVERSITY (NAAWAN)
        </option>
        <option value="MINDANAO STATE UNIVERSITY - TAWI-TAWI COLLEGE OF TECHNOLOGY AND OCEANOGRAPHY">
          MINDANAO STATE UNIVERSITY - TAWI-TAWI COLLEGE OF TECHNOLOGY AND
          OCEANOGRAPHY
        </option>
        <option value="MINDANAO STATE UNIVERSITY MAIN CAMPUS">
          MINDANAO STATE UNIVERSITY MAIN CAMPUS
        </option>
        <option value="MINDORO STATE UNIVERSITY">
          MINDORO STATE UNIVERSITY
        </option>
        <option value="MINES AND GEOSCIENCES BUREAU">
          MINES AND GEOSCIENCES BUREAU
        </option>
        <option value="MINISTRY OF BASIC, HIGHER AND TECHNICAL EDUCATION">
          MINISTRY OF BASIC, HIGHER AND TECHNICAL EDUCATION
        </option>
        <option value="MINISTRY OF ENVIRONMENT, NATURAL RESOURCES AND ENERGY">
          MINISTRY OF ENVIRONMENT, NATURAL RESOURCES AND ENERGY
        </option>
        <option value="MINISTRY OF FINANCE, AND BUDGET AND MANAGEMENT">
          MINISTRY OF FINANCE, AND BUDGET AND MANAGEMENT
        </option>
        <option value="MINISTRY OF HEALTH">MINISTRY OF HEALTH</option>
        <option value="MINISTRY OF HUMAN SETTLEMENTS AND DEVELOPMENT">
          MINISTRY OF HUMAN SETTLEMENTS AND DEVELOPMENT
        </option>
        <option value="MINISTRY OF INIDIGENOUS PEOPLES AFFAIRS">
          MINISTRY OF INIDIGENOUS PEOPLES AFFAIRS
        </option>
        <option value="MINISTRY OF LABOR AND EMPLOYMENT">
          MINISTRY OF LABOR AND EMPLOYMENT
        </option>
        <option value="MINISTRY OF PUBLIC ORDER AND SAFETY">
          MINISTRY OF PUBLIC ORDER AND SAFETY
        </option>
        <option value="MINISTRY OF PUBLIC WORKS">
          MINISTRY OF PUBLIC WORKS
        </option>
        <option value="MINISTRY OF SCIENCE AND TECHNOLOGY">
          MINISTRY OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="MINISTRY OF SOCIAL SERVICES">
          MINISTRY OF SOCIAL SERVICES
        </option>
        <option value="MINISTRY OF THE INTERIOR AND LOCAL GOVERNMENT">
          MINISTRY OF THE INTERIOR AND LOCAL GOVERNMENT
        </option>
        <option value="MINISTRY OF TRADE, INVESTMENT AND TOURISM">
          MINISTRY OF TRADE, INVESTMENT AND TOURISM
        </option>
        <option value="MINISTRY OF TRANSPORTATION AND COMMUNICATION">
          MINISTRY OF TRANSPORTATION AND COMMUNICATION
        </option>
        <option value="MOUNTAIN PROVINCE STATE POLYTECHNIC COLLEGE">
          MOUNTAIN PROVINCE STATE POLYTECHNIC COLLEGE
        </option>
        <option value="MOVIE AND TELEVISION REVIEW AND CLASSIFICATION BOARD">
          MOVIE AND TELEVISION REVIEW AND CLASSIFICATION BOARD
        </option>
        <option value="Municipal Government of Alitagtag">
          Municipal Government of Alitagtag
        </option>
        <option value="Municipality of Lagonglong">
          Municipality of Lagonglong
        </option>
        <option value="MUNICIPALITY OF LUMBAN">MUNICIPALITY OF LUMBAN</option>
        <option value="NABUNTURAN WATER DISTRICT">
          NABUNTURAN WATER DISTRICT
        </option>
        <option value="NAGUILIAN WATER DISTRICT">
          NAGUILIAN WATER DISTRICT
        </option>
        <option value="NASUGBU WATER DISTRICT">NASUGBU WATER DISTRICT</option>
        <option value="NATIONAL ACADEMY OF SCIENCE AND TECHNOLOGY">
          NATIONAL ACADEMY OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="NATIONAL ACADEMY OF SPORTS">
          NATIONAL ACADEMY OF SPORTS
        </option>
        <option value="NATIONAL ANTI-POVERTY COMMISSION">
          NATIONAL ANTI-POVERTY COMMISSION
        </option>
        <option value="NATIONAL ARCHIVES OF THE PHILIPPINES">
          NATIONAL ARCHIVES OF THE PHILIPPINES
        </option>
        <option value="NATIONAL AUTHORITY FOR CHILD CARE">
          NATIONAL AUTHORITY FOR CHILD CARE
        </option>
        <option value="NATIONAL BOOK DEVELOPMENT BOARD">
          NATIONAL BOOK DEVELOPMENT BOARD
        </option>
        <option value="NATIONAL CENTER FOR MENTAL HEALTH">
          NATIONAL CENTER FOR MENTAL HEALTH
        </option>
        <option value="NATIONAL CHILDREN S HOSPITAL">
          NATIONAL CHILDREN S HOSPITAL
        </option>
        <option value="NATIONAL COMMISSION FOR CULTURE AND THE ARTS">
          NATIONAL COMMISSION FOR CULTURE AND THE ARTS
        </option>
        <option value="National Commission of Senior Citizens">
          National Commission of Senior Citizens
        </option>
        <option value="NATIONAL COMMISSION ON INDIGENOUS PEOPLES">
          NATIONAL COMMISSION ON INDIGENOUS PEOPLES
        </option>
        <option value="NATIONAL COMMISSION ON MUSLIM FILIPINOS">
          NATIONAL COMMISSION ON MUSLIM FILIPINOS
        </option>
        <option value="NATIONAL CONCILIATION AND MEDIATION BOARD">
          NATIONAL CONCILIATION AND MEDIATION BOARD
        </option>
        <option value="NATIONAL COUNCIL FOR CHILDREN?S TELEVISION">
          NATIONAL COUNCIL FOR CHILDREN?S TELEVISION
        </option>
        <option value="NATIONAL COUNCIL ON DISABILITY AFFAIRS">
          NATIONAL COUNCIL ON DISABILITY AFFAIRS
        </option>
        <option value="NATIONAL DAIRY AUTHORITY">
          NATIONAL DAIRY AUTHORITY
        </option>
        <option value="NATIONAL DEFENSE COLLEGE OF THE PHILIPPINES">
          NATIONAL DEFENSE COLLEGE OF THE PHILIPPINES
        </option>
        <option value="NATIONAL DEVELOPMENT COMPANY">
          NATIONAL DEVELOPMENT COMPANY
        </option>
        <option value="NATIONAL ECONOMIC AND DEVELOPMENT AUTHORITY">
          NATIONAL ECONOMIC AND DEVELOPMENT AUTHORITY
        </option>
        <option value="NATIONAL ELECTRIFICATION ADMINISTRATION">
          NATIONAL ELECTRIFICATION ADMINISTRATION
        </option>
        <option value="NATIONAL FISHERIES RESEARCH AND DEVELOPMENT INSTITUTE">
          NATIONAL FISHERIES RESEARCH AND DEVELOPMENT INSTITUTE
        </option>
        <option value="NATIONAL FOOD AUTHORITY">NATIONAL FOOD AUTHORITY</option>
        <option value="NATIONAL FOOD AUTHORITY SOUTHERN TAGALOG REGION">
          NATIONAL FOOD AUTHORITY SOUTHERN TAGALOG REGION
        </option>
        <option value="NATIONAL HISTORICAL COMMISSION OF THE PHILIPPINES">
          NATIONAL HISTORICAL COMMISSION OF THE PHILIPPINES
        </option>
        <option value="NATIONAL HOME MORTGAGE FINANCE CORPORATION">
          NATIONAL HOME MORTGAGE FINANCE CORPORATION
        </option>
        <option value="NATIONAL HOUSING AUTHORITY">
          NATIONAL HOUSING AUTHORITY
        </option>
        <option value="NATIONAL IRRIGATION ADMINISTRATION">
          NATIONAL IRRIGATION ADMINISTRATION
        </option>
        <option value="NATIONAL KIDNEY AND TRANSPLANT INSTITUTE">
          NATIONAL KIDNEY AND TRANSPLANT INSTITUTE
        </option>
        <option value="NATIONAL LABOR RELATIONS COMMISSION">
          NATIONAL LABOR RELATIONS COMMISSION
        </option>
        <option value="NATIONAL MAPPING AND RESOURCE INFORMATION AUTHORITY">
          NATIONAL MAPPING AND RESOURCE INFORMATION AUTHORITY
        </option>
        <option value="NATIONAL MEAT INSPECTION SERVICE">
          NATIONAL MEAT INSPECTION SERVICE
        </option>
        <option value="NATIONAL MUSEUM">NATIONAL MUSEUM</option>
        <option value="NATIONAL NUTRITION COUNCIL">
          NATIONAL NUTRITION COUNCIL
        </option>
        <option value="NATIONAL PARKS DEVELOPMENT COMMITTEE">
          NATIONAL PARKS DEVELOPMENT COMMITTEE
        </option>
        <option value="NATIONAL POLICE COMMISSION">
          NATIONAL POLICE COMMISSION
        </option>
        <option value="NATIONAL POWER CORPORATION">
          NATIONAL POWER CORPORATION
        </option>
        <option value="NATIONAL PRIVACY COMMISSION">
          NATIONAL PRIVACY COMMISSION
        </option>
        <option value="NATIONAL RESEARCH COUNCIL OF THE PHILIPPINES">
          NATIONAL RESEARCH COUNCIL OF THE PHILIPPINES
        </option>
        <option value="NATIONAL SECURITY COUNCIL">
          NATIONAL SECURITY COUNCIL
        </option>
        <option value="NATIONAL TAX RESEARCH CENTER">
          NATIONAL TAX RESEARCH CENTER
        </option>
        <option value="NATIONAL TELECOMMUNICATIONS COMMISSION">
          NATIONAL TELECOMMUNICATIONS COMMISSION
        </option>
        <option value="NATIONAL TOBACCO ADMINISTRATION">
          NATIONAL TOBACCO ADMINISTRATION
        </option>
        <option value="NATIONAL TRANSMISSION CORPORATION">
          NATIONAL TRANSMISSION CORPORATION
        </option>
        <option value="NATIONAL WAGES AND PRODUCTIVITY COMMISSION">
          NATIONAL WAGES AND PRODUCTIVITY COMMISSION
        </option>
        <option value="NATIONAL WATER RESOURCES BOARD">
          NATIONAL WATER RESOURCES BOARD
        </option>
        <option value="NATIONAL YOUTH COMMISSION">
          NATIONAL YOUTH COMMISSION
        </option>
        <option value="NAUJAN WATER DISTRICT">NAUJAN WATER DISTRICT</option>
        <option value="NEW CORELLA WATER DISTRICT">
          NEW CORELLA WATER DISTRICT
        </option>
        <option value="NEWS AND INFORMATION BUREAU">
          NEWS AND INFORMATION BUREAU
        </option>
        <option value="NORTH EASTERN MINDANAO STATE UNIVERSITY">
          NORTH EASTERN MINDANAO STATE UNIVERSITY
        </option>
        <option value="NORTHERN BUKIDNON STATE COLLEGE">
          NORTHERN BUKIDNON STATE COLLEGE
        </option>
        <option value="NORTHERN ILOILO STATE UNIVERSITY">
          NORTHERN ILOILO STATE UNIVERSITY
        </option>
        <option value="NORTHERN MINDANAO MEDICAL CENTER">
          NORTHERN MINDANAO MEDICAL CENTER
        </option>
        <option value="NORTHERN NEGROS STATE COLLEGE OF SCIENCE AND TECHNOLOGY">
          NORTHERN NEGROS STATE COLLEGE OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="NORTHWEST SAMAR STATE UNIVERSITY">
          NORTHWEST SAMAR STATE UNIVERSITY
        </option>
        <option value="NUEVA ECIJA UNIVERSITY OF SCIENCE AND TECHNOLOGY">
          NUEVA ECIJA UNIVERSITY OF SCIENCE AND TECHNOLOGY
        </option>
        <option value="NUEVA VIZCAYA STATE UNIVERSITY">
          NUEVA VIZCAYA STATE UNIVERSITY
        </option>
        <option value="OCCIDENTAL MINDORO NATIONAL COLLEGE">
          OCCIDENTAL MINDORO NATIONAL COLLEGE
        </option>
        <option value="OCCUPATIONAL SAFETY AND HEALTH CENTER">
          OCCUPATIONAL SAFETY AND HEALTH CENTER
        </option>
        <option value="OFFICE FOR ALTERNATIVE DISPUTE RESOLUTION">
          OFFICE FOR ALTERNATIVE DISPUTE RESOLUTION
        </option>
        <option value="OFFICE FOR TRANSPORTATION SECURITY">
          OFFICE FOR TRANSPORTATION SECURITY
        </option>
        <option value="OFFICE OF CIVIL DEFENSE">OFFICE OF CIVIL DEFENSE</option>
        <option value="OFFICE OF THE GOVERNMENT CORPORATE COUNSEL">
          OFFICE OF THE GOVERNMENT CORPORATE COUNSEL
        </option>
        <option value="OFFICE OF THE OMBUDSMAN">OFFICE OF THE OMBUDSMAN</option>
        <option value="OFFICE OF THE PRESIDENT">OFFICE OF THE PRESIDENT</option>
        <option value="OFFICE OF THE SOLICITOR GENERAL">
          OFFICE OF THE SOLICITOR GENERAL
        </option>
        <option value="OFFICE OF THE VICE PRESIDENT">
          OFFICE OF THE VICE PRESIDENT
        </option>
        <option value="OFFICE OF TRANSPORTATION COOPERATIVES">
          OFFICE OF TRANSPORTATION COOPERATIVES
        </option>
        <option value="OVERSEAS WORKERS WELFARE ADMINISTRATION">
          OVERSEAS WORKERS WELFARE ADMINISTRATION
        </option>
        <option value="PALAWAN COUNCIL FOR SUSTAINABLE DEVELOPMENT">
          PALAWAN COUNCIL FOR SUSTAINABLE DEVELOPMENT
        </option>
        <option value="PALOMPON INSTITUTE OF TECHNOLOGY">
          PALOMPON INSTITUTE OF TECHNOLOGY
        </option>
        <option value="PAMANTASAN NG LUNGSOD NG MAYNILA">
          PAMANTASAN NG LUNGSOD NG MAYNILA
        </option>
        <option value="PANGASINAN STATE UNIVERSITY">
          PANGASINAN STATE UNIVERSITY
        </option>
        <option value="PAROLE AND PROBATION ADMINISTRATION">
          PAROLE AND PROBATION ADMINISTRATION
        </option>
        <option value="PARTIDO STATE UNIVERSITY">
          PARTIDO STATE UNIVERSITY
        </option>
        <option value="Pasay City Government">Pasay City Government</option>
        <option value="PGO ABRA">PGO ABRA</option>
        <option value="PGO AGUSAN DEL NORTE">PGO AGUSAN DEL NORTE</option>
        <option value="PGO AGUSAN DEL SUR">PGO AGUSAN DEL SUR</option>
        <option value="PGO AKLAN">PGO AKLAN</option>
        <option value="PGO ALBAY">PGO ALBAY</option>
        <option value="PGO ANTIQUE">PGO ANTIQUE</option>
        <option value="PGO APAYAO">PGO APAYAO</option>
        <option value="PGO AURORA">PGO AURORA</option>
        <option value="PGO BASILAN">PGO BASILAN</option>
        <option value="PGO BATAAN">PGO BATAAN</option>
        <option value="PGO BATANES">PGO BATANES</option>
        <option value="PGO BATANGAS">PGO BATANGAS</option>
        <option value="PGO BENGUET">PGO BENGUET</option>
        <option value="PGO BILIRAN">PGO BILIRAN</option>
        <option value="PGO BOHOL">PGO BOHOL</option>
        <option value="PGO BUKIDNON">PGO BUKIDNON</option>
        <option value="PGO BULACAN, BULACAN">PGO BULACAN, BULACAN</option>
        <option value="PGO CAGAYAN">PGO CAGAYAN</option>
        <option value="PGO CAMARINES NORTE">PGO CAMARINES NORTE</option>
        <option value="PGO CAMARINES SUR">PGO CAMARINES SUR</option>
        <option value="PGO CAMIGUIN">PGO CAMIGUIN</option>
        <option value="PGO CAPIZ">PGO CAPIZ</option>
        <option value="PGO CATANDUANES">PGO CATANDUANES</option>
        <option value="PGO CAVITE">PGO CAVITE</option>
        <option value="PGO CEBU">PGO CEBU</option>
        <option value="PGO COTABATO (NORTH COTABATO)">
          PGO COTABATO (NORTH COTABATO)
        </option>
        <option value="PGO DAVAO DE ORO">PGO DAVAO DE ORO</option>
        <option value="PGO DAVAO DEL NORTE">PGO DAVAO DEL NORTE</option>
        <option value="PGO DAVAO DEL SUR">PGO DAVAO DEL SUR</option>
        <option value="PGO DAVAO OCCIDENTAL">PGO DAVAO OCCIDENTAL</option>
        <option value="PGO DAVAO ORIENTAL">PGO DAVAO ORIENTAL</option>
        <option value="PGO DINAGAT ISLAND">PGO DINAGAT ISLAND</option>
        <option value="PGO EASTERN SAMAR">PGO EASTERN SAMAR</option>
        <option value="PGO GUIMARAS">PGO GUIMARAS</option>
        <option value="PGO IFUGAO">PGO IFUGAO</option>
        <option value="PGO ILOCOS NORTE">PGO ILOCOS NORTE</option>
        <option value="PGO ILOCOS SUR">PGO ILOCOS SUR</option>
        <option value="PGO ILOILO">PGO ILOILO</option>
        <option value="PGO ISABELA">PGO ISABELA</option>
        <option value="PGO KALINGA">PGO KALINGA</option>
        <option value="PGO LA UNION">PGO LA UNION</option>
        <option value="PGO LAGUNA">PGO LAGUNA</option>
        <option value="PGO LANAO DEL NORTE">PGO LANAO DEL NORTE</option>
        <option value="PGO LANAO DEL SUR">PGO LANAO DEL SUR</option>
        <option value="PGO LEYTE">PGO LEYTE</option>
        <option value="PGO MAGUINDANAO">PGO MAGUINDANAO</option>
        <option value="PGO MAGUINDANAO DEL NORTE">
          PGO MAGUINDANAO DEL NORTE
        </option>
        <option value="PGO MAGUINDANAO DEL SUR">PGO MAGUINDANAO DEL SUR</option>
        <option value="PGO MARINDUQUE">PGO MARINDUQUE</option>
        <option value="PGO MASBATE">PGO MASBATE</option>
        <option value="PGO MISAMIS OCCIDENTAL">PGO MISAMIS OCCIDENTAL</option>
        <option value="PGO MISAMIS ORIENTAL">PGO MISAMIS ORIENTAL</option>
        <option value="PGO MOUNTAIN PROVINCE">PGO MOUNTAIN PROVINCE</option>
        <option value="PGO NEGROS OCCIDENTAL">PGO NEGROS OCCIDENTAL</option>
        <option value="PGO NEGROS ORIENTAL">PGO NEGROS ORIENTAL</option>
        <option value="PGO NORTHERN SAMAR">PGO NORTHERN SAMAR</option>
        <option value="PGO NUEVA ECIJA">PGO NUEVA ECIJA</option>
        <option value="PGO NUEVA VIZCAYA">PGO NUEVA VIZCAYA</option>
        <option value="PGO OCCIDENTAL MINDORO">PGO OCCIDENTAL MINDORO</option>
        <option value="PGO ORIENTAL MINDORO">PGO ORIENTAL MINDORO</option>
        <option value="PGO PALAWAN">PGO PALAWAN</option>
        <option value="PGO PAMPANGA">PGO PAMPANGA</option>
        <option value="PGO PANGASINAN">PGO PANGASINAN</option>
        <option value="PGO QUEZON">PGO QUEZON</option>
        <option value="PGO QUIRINO">PGO QUIRINO</option>
        <option value="PGO RIZAL">PGO RIZAL</option>
        <option value="PGO ROMBLON">PGO ROMBLON</option>
        <option value="PGO SAMAR">PGO SAMAR</option>
        <option value="PGO SARANGANI">PGO SARANGANI</option>
        <option value="PGO SIQUIJOR">PGO SIQUIJOR</option>
        <option value="PGO SORSOGON">PGO SORSOGON</option>
        <option value="PGO SOUTH COTABATO">PGO SOUTH COTABATO</option>
        <option value="PGO SOUTHERN LEYTE">PGO SOUTHERN LEYTE</option>
        <option value="PGO SULTAN KUDARAT">PGO SULTAN KUDARAT</option>
        <option value="PGO SULU">PGO SULU</option>
        <option value="PGO SURIGAO DEL NORTE">PGO SURIGAO DEL NORTE</option>
        <option value="PGO SURIGAO DEL SUR">PGO SURIGAO DEL SUR</option>
        <option value="PGO TARLAC">PGO TARLAC</option>
        <option value="PGO ZAMBALES">PGO ZAMBALES</option>
        <option value="PGO ZAMBOANGA DEL NORTE">PGO ZAMBOANGA DEL NORTE</option>
        <option value="PGO ZAMBOANGA DEL SUR">PGO ZAMBOANGA DEL SUR</option>
        <option value="PHILIPPINE AIR FORCE">PHILIPPINE AIR FORCE</option>
        <option value="PHILIPPINE ARMY">PHILIPPINE ARMY</option>
        <option value="PHILIPPINE ATMOSPHERIC GEOPHYSICAL AND ASTRONOMICAL SERVICES ADMINISTRATION">
          PHILIPPINE ATMOSPHERIC GEOPHYSICAL AND ASTRONOMICAL SERVICES
          ADMINISTRATION
        </option>
        <option value="PHILIPPINE CENTER FOR POSTHARVEST DEVELOPMENT AND MECHANIZATION">
          PHILIPPINE CENTER FOR POSTHARVEST DEVELOPMENT AND MECHANIZATION
        </option>
        <option value="PHILIPPINE CHARITY SWEEPSTAKES OFFICE">
          PHILIPPINE CHARITY SWEEPSTAKES OFFICE
        </option>
        <option value="PHILIPPINE CHILDRENS MEDICAL CENTER">
          PHILIPPINE CHILDRENS MEDICAL CENTER
        </option>
        <option value="PHILIPPINE COAST GUARD">PHILIPPINE COAST GUARD</option>
        <option value="PHILIPPINE COCONUT AUTHORITY">
          PHILIPPINE COCONUT AUTHORITY
        </option>
        <option value="PHILIPPINE COMMISSION ON SPORTS SCUBA DIVING">
          PHILIPPINE COMMISSION ON SPORTS SCUBA DIVING
        </option>
        <option value="PHILIPPINE COMMISSION ON WOMEN">
          PHILIPPINE COMMISSION ON WOMEN
        </option>
        <option value="PHILIPPINE COMPETITION COMMISSION">
          PHILIPPINE COMPETITION COMMISSION
        </option>
        <option value="PHILIPPINE COUNCIL FOR AGRICULTURE, FORESTRY AND NATURAL RESOURCES RESEARCH &  DEVELOPMENT">
          PHILIPPINE COUNCIL FOR AGRICULTURE, FORESTRY AND NATURAL RESOURCES
          RESEARCH & DEVELOPMENT
        </option>
        <option value="PHILIPPINE COUNCIL FOR INDUSTRY, ENERGY AND EMERGING TECHNOLOGY RESEARCH AND  DEVELOPMENT">
          PHILIPPINE COUNCIL FOR INDUSTRY, ENERGY AND EMERGING TECHNOLOGY
          RESEARCH AND DEVELOPMENT
        </option>
        <option value="PHILIPPINE CROP INSURANCE CORPORATION">
          PHILIPPINE CROP INSURANCE CORPORATION
        </option>
        <option value="PHILIPPINE DEPOSIT INSURANCE CORPORATION">
          PHILIPPINE DEPOSIT INSURANCE CORPORATION
        </option>
        <option value="PHILIPPINE DRUG ENFORCEMENT AGENCY">
          PHILIPPINE DRUG ENFORCEMENT AGENCY
        </option>
        <option value="PHILIPPINE ECONOMIC ZONE AUTHORITY">
          PHILIPPINE ECONOMIC ZONE AUTHORITY
        </option>
        <option value="PHILIPPINE FIBER INDUSTRY DEVELOPMENT AUTHORITY">
          PHILIPPINE FIBER INDUSTRY DEVELOPMENT AUTHORITY
        </option>
        <option value="PHILIPPINE FISHERIES DEVELOPMENT AUTHORITY">
          PHILIPPINE FISHERIES DEVELOPMENT AUTHORITY
        </option>
        <option value="PHILIPPINE GUARANTEE CORPORATION">
          PHILIPPINE GUARANTEE CORPORATION
        </option>
        <option value="PHILIPPINE HEALTH INSURANCE CORPORATION">
          PHILIPPINE HEALTH INSURANCE CORPORATION
        </option>
        <option value="PHILIPPINE HEART CENTER">PHILIPPINE HEART CENTER</option>
        <option value="PHILIPPINE HIGH SCHOOL FOR THE ARTS">
          PHILIPPINE HIGH SCHOOL FOR THE ARTS
        </option>
        <option value="PHILIPPINE INSTITUTE FOR DEVELOPMENT STUDIES">
          PHILIPPINE INSTITUTE FOR DEVELOPMENT STUDIES
        </option>
        <option value="PHILIPPINE INSTITUTE OF VOLCANOLOGY AND SEISMOLOGY">
          PHILIPPINE INSTITUTE OF VOLCANOLOGY AND SEISMOLOGY
        </option>
        <option value="PHILIPPINE INTERNATIONAL TRADING CORPORATION">
          PHILIPPINE INTERNATIONAL TRADING CORPORATION
        </option>
        <option value="PHILIPPINE MERCHANT MARINE ACADEMY">
          PHILIPPINE MERCHANT MARINE ACADEMY
        </option>
        <option value="PHILIPPINE MILITARY ACADEMY">
          PHILIPPINE MILITARY ACADEMY
        </option>
        <option value="PHILIPPINE NATIONAL AIDS COUNCIL">
          PHILIPPINE NATIONAL AIDS COUNCIL
        </option>
        <option value="PHILIPPINE NATIONAL POLICE">
          PHILIPPINE NATIONAL POLICE
        </option>
        <option value="PHILIPPINE NATIONAL RAILWAYS">
          PHILIPPINE NATIONAL RAILWAYS
        </option>
        <option value="PHILIPPINE NATIONAL VOLUNTEER SERVICE COORDINATING AGENCY">
          PHILIPPINE NATIONAL VOLUNTEER SERVICE COORDINATING AGENCY
        </option>
        <option value="PHILIPPINE NAVY">PHILIPPINE NAVY</option>
        <option value="PHILIPPINE NORMAL UNIVERSITY">
          PHILIPPINE NORMAL UNIVERSITY
        </option>
        <option value="PHILIPPINE NUCLEAR RESEARCH INSTITUTE">
          PHILIPPINE NUCLEAR RESEARCH INSTITUTE
        </option>
        <option value="PHILIPPINE ORTHOPEDIC CENTER">
          PHILIPPINE ORTHOPEDIC CENTER
        </option>
        <option value="PHILIPPINE PORTS AUTHORITY">
          PHILIPPINE PORTS AUTHORITY
        </option>
        <option value="PHILIPPINE POSTAL CORPORATION">
          PHILIPPINE POSTAL CORPORATION
        </option>
        <option value="PHILIPPINE PUBLIC SAFETY COLLEGE">
          PHILIPPINE PUBLIC SAFETY COLLEGE
        </option>
        <option value="PHILIPPINE RECLAMATION AUTHORITY">
          PHILIPPINE RECLAMATION AUTHORITY
        </option>
        <option value="PHILIPPINE RETIREMENT AUTHORITY">
          PHILIPPINE RETIREMENT AUTHORITY
        </option>
        <option value="PHILIPPINE RICE RESEARCH INSTITUTE">
          PHILIPPINE RICE RESEARCH INSTITUTE
        </option>
        <option value="PHILIPPINE SCIENCE HIGH SCHOOL - BICOL REGION CAMPUS">
          PHILIPPINE SCIENCE HIGH SCHOOL - BICOL REGION CAMPUS
        </option>
        <option value="PHILIPPINE SCIENCE HIGH SCHOOL SYSTEM">
          PHILIPPINE SCIENCE HIGH SCHOOL SYSTEM
        </option>
        <option value="PHILIPPINE SCIENCE HIGH SCHOOL WESTERN VISAYAS">
          PHILIPPINE SCIENCE HIGH SCHOOL WESTERN VISAYAS
        </option>
        <option value="PHILIPPINE SPACE AGENCY">PHILIPPINE SPACE AGENCY</option>
        <option value="PHILIPPINE SPORTS COMMISSION">
          PHILIPPINE SPORTS COMMISSION
        </option>
        <option value="PHILIPPINE STATE COLLEGE OF AERONAUTICS">
          PHILIPPINE STATE COLLEGE OF AERONAUTICS
        </option>
        <option value="PHILIPPINE STATISTICAL RESEARCH AND TRAINING INSTITUTE">
          PHILIPPINE STATISTICAL RESEARCH AND TRAINING INSTITUTE
        </option>
        <option value="PHILIPPINE STATISTICS AUTHORITY">
          PHILIPPINE STATISTICS AUTHORITY
        </option>
        <option value="PHILIPPINE TRADE TRAINING CENTER">
          PHILIPPINE TRADE TRAINING CENTER
        </option>
        <option value="PHILIPPINE VETERANS AFFAIRS OFFICE">
          PHILIPPINE VETERANS AFFAIRS OFFICE
        </option>
        <option value="PHIVIDEC INDUSTRIAL AUTHORITY">
          PHIVIDEC INDUSTRIAL AUTHORITY
        </option>
        <option value="PIKIT WATER DISTRICT">PIKIT WATER DISTRICT</option>
        <option value="PILAR WATER DISTRICT">PILAR WATER DISTRICT</option>
        <option value="PILILLA WATER DISTRICT">PILILLA WATER DISTRICT</option>
        <option value="POLOMOLOK WATER DISTRICT">
          POLOMOLOK WATER DISTRICT
        </option>
        <option value="POLYTECHNIC UNIVERSITY OF THE PHILIPPINES">
          POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
        </option>
        <option value="POWER SECTOR ASSETS AND LIABILITIES MANAGEMENT CORPORATION">
          POWER SECTOR ASSETS AND LIABILITIES MANAGEMENT CORPORATION
        </option>
        <option value="POZORRUBIO WATER DISTRICT">
          POZORRUBIO WATER DISTRICT
        </option>
        <option value="PRESIDENT RAMON MAGSAYSAY STATE UNIVERSITY">
          PRESIDENT RAMON MAGSAYSAY STATE UNIVERSITY
        </option>
        <option value="PRESIDENT RAMON MAGSAYSAY TECHNOLOGICAL UNIVERSITY">
          PRESIDENT RAMON MAGSAYSAY TECHNOLOGICAL UNIVERSITY
        </option>
        <option value="PRESIDENTIAL BROADCAST STAFF - RADIO TELEVISION MALACAÑANG">
          PRESIDENTIAL BROADCAST STAFF - RADIO TELEVISION MALACAÑANG
        </option>
        <option value="PRESIDENTIAL COMMISSION ON GOOD GOVERNMENT">
          PRESIDENTIAL COMMISSION ON GOOD GOVERNMENT
        </option>
        <option value="PRESIDENTIAL COMMUNICATIONS OPERATIONS OFFICE">
          PRESIDENTIAL COMMUNICATIONS OPERATIONS OFFICE
        </option>
        <option value="PROCUREMENT SERVICE">PROCUREMENT SERVICE</option>
        <option value="PROFESSIONAL REGULATION COMMISSION">
          PROFESSIONAL REGULATION COMMISSION
        </option>
        <option value="PROFESSIONAL REGULATIONS COMMISSION">
          PROFESSIONAL REGULATIONS COMMISSION
        </option>
        <option value="PUBLIC ATTORNEY S OFFICE">
          PUBLIC ATTORNEY S OFFICE
        </option>
        <option value="PUBLIC-PRIVATE PARTNERSHIP CENTER OF THE PHILIPPINES">
          PUBLIC-PRIVATE PARTNERSHIP CENTER OF THE PHILIPPINES
        </option>
        <option value="PUERTO PRINSESA CITY WATER DISTRICT">
          PUERTO PRINSESA CITY WATER DISTRICT
        </option>
        <option value="QUIRINO MEMORIAL MEDICAL CENTER">
          QUIRINO MEMORIAL MEDICAL CENTER
        </option>
        <option value="QUIRINO STATE UNIVERSITY">
          QUIRINO STATE UNIVERSITY
        </option>
        <option value="REGION 1 MEDICAL CENTER">REGION 1 MEDICAL CENTER</option>
        <option value="REGION II TRAUMA AND MEDICAL CENTER">
          REGION II TRAUMA AND MEDICAL CENTER
        </option>
        <option value="REGIONAL TRIAL COURT">REGIONAL TRIAL COURT</option>
        <option value="REGIONAL TRIPARTITE WAGES & PRODUCTIVITY BOARD - VII">
          REGIONAL TRIPARTITE WAGES & PRODUCTIVITY BOARD - VII
        </option>
        <option value="REGIONAL TRIPARTITE WAGES AND PRODUCTIVITY BOARD">
          REGIONAL TRIPARTITE WAGES AND PRODUCTIVITY BOARD
        </option>
        <option value="RESEARCH INSTITUTE FOR TROPICAL MEDICINE">
          RESEARCH INSTITUTE FOR TROPICAL MEDICINE
        </option>
        <option value="RIZAL MEDICAL CENTER">RIZAL MEDICAL CENTER</option>
        <option value="ROMBLON STATE UNIVERSITY">
          ROMBLON STATE UNIVERSITY
        </option>
        <option value="ROXAS WATER DISTRICT">ROXAS WATER DISTRICT</option>
        <option value="SAGAY WATER DISTRICT">SAGAY WATER DISTRICT</option>
        <option value="SAINT ANTHONY MOTHER AND CHILD HOSPITAL">
          SAINT ANTHONY MOTHER AND CHILD HOSPITAL
        </option>
        <option value="SAMAR STATE UNIVERSITY">SAMAR STATE UNIVERSITY</option>
        <option value="SAN ANTONIO WATER DISTRICT">
          SAN ANTONIO WATER DISTRICT
        </option>
        <option value="SAN FRANCISCO WATER DISTRICT">
          SAN FRANCISCO WATER DISTRICT
        </option>
        <option value="SAN GUILLERMO WATER DISTRICT">
          SAN GUILLERMO WATER DISTRICT
        </option>
        <option value="SAN JOSE WATER DISTRICT">SAN JOSE WATER DISTRICT</option>
        <option value="SAN LAZARO HOSPITAL">SAN LAZARO HOSPITAL</option>
        <option value="SAN NICOLAS WATER DISTRICT">
          SAN NICOLAS WATER DISTRICT
        </option>
        <option value="SAN PABLO CITY WATER DISTRICT">
          SAN PABLO CITY WATER DISTRICT
        </option>
        <option value="SANDIGANBAYAN">SANDIGANBAYAN</option>
        <option value="SANTA MARIA WATER DISTRICT">
          SANTA MARIA WATER DISTRICT
        </option>
        <option value="SASMUAN WATER DISTRICT">SASMUAN WATER DISTRICT</option>
        <option value="SDO Pasig">SDO Pasig</option>
        <option value="SECURITIES AND EXCHANGE COMMISSION">
          SECURITIES AND EXCHANGE COMMISSION
        </option>
        <option value="SENATE ELECTORAL TRIBUNAL">
          SENATE ELECTORAL TRIBUNAL
        </option>
        <option value="SENATE OF THE PHILIPPINES">
          SENATE OF THE PHILIPPINES
        </option>
        <option value="SINDANGAN WATER DISTRICT">
          SINDANGAN WATER DISTRICT
        </option>
        <option value="SINILOAN WATER DISTRICT">SINILOAN WATER DISTRICT</option>
        <option value="SIPALAY CITY WATER DISTRICT">
          SIPALAY CITY WATER DISTRICT
        </option>
        <option value="SIQUIJOR STATE COLLEGE">SIQUIJOR STATE COLLEGE</option>
        <option value="Small Business Guarantee and Finance Corporation">
          Small Business Guarantee and Finance Corporation
        </option>
        <option value="SOCCSKSARGEN GENERAL HOSPITAL">
          SOCCSKSARGEN GENERAL HOSPITAL
        </option>
        <option value="SOCIAL SECURITY SYSTEM">SOCIAL SECURITY SYSTEM</option>
        <option value="SORSOGON STATE UNIVERSITY">
          SORSOGON STATE UNIVERSITY
        </option>
        <option value="SOUTHERN ISABELA MEDICAL CENTER">
          SOUTHERN ISABELA MEDICAL CENTER
        </option>
        <option value="SOUTHERN LEYTE STATE UNIVERSITY">
          SOUTHERN LEYTE STATE UNIVERSITY
        </option>
        <option value="SOUTHERN PHILIPPINES AGRI-BUSINESS AND MARINE AND AQUATIC SCHOOL OF TECHNOLOGY">
          SOUTHERN PHILIPPINES AGRI-BUSINESS AND MARINE AND AQUATIC SCHOOL OF
          TECHNOLOGY
        </option>
        <option value="SOUTHERN PHILIPPINES DEVELOPMENT AUTHORITY">
          SOUTHERN PHILIPPINES DEVELOPMENT AUTHORITY
        </option>
        <option value="SOUTHERN PHILIPPINES MEDICAL CENTER">
          SOUTHERN PHILIPPINES MEDICAL CENTER
        </option>
        <option value="STA. CRUZ WATER DISTRICT">
          STA. CRUZ WATER DISTRICT
        </option>
        <option value="STA. LUCIA WATER DISTRICT">
          STA. LUCIA WATER DISTRICT
        </option>
        <option value="SUGAR REGULATORY ADMINISTRATION">
          SUGAR REGULATORY ADMINISTRATION
        </option>
        <option value="SULTAN KUDARAT STATE UNIVERSITY">
          SULTAN KUDARAT STATE UNIVERSITY
        </option>
        <option value="SULTAN KUDARAT WATER DISTRICT">
          SULTAN KUDARAT WATER DISTRICT
        </option>
        <option value="SULU STATE COLLEGE">SULU STATE COLLEGE</option>
        <option value="SUPREME COURT OF THE PHILIPPINES">
          SUPREME COURT OF THE PHILIPPINES
        </option>
        <option value="SURALLAH WATER DISTRICT">SURALLAH WATER DISTRICT</option>
        <option value="SURIGAO STATE COLLEGE OF TECHNOLOGY">
          SURIGAO STATE COLLEGE OF TECHNOLOGY
        </option>
        <option value="TABACO CITY WATER DISTRICT">
          TABACO CITY WATER DISTRICT
        </option>
        <option value="TAFT WATER DISTRICT">TAFT WATER DISTRICT</option>
        <option value="TAGBINA WATER DISTRICT">TAGBINA WATER DISTRICT</option>
        <option value="TAGUM WATER DISTRICT">TAGUM WATER DISTRICT</option>
        <option value="TALAVERA GENERAL HOSPITAL">
          TALAVERA GENERAL HOSPITAL
        </option>
        <option value="TANAY WATER DISTRICT">TANAY WATER DISTRICT</option>
        <option value="TANDAG WATER DISTRICT">TANDAG WATER DISTRICT</option>
        <option value="TANJAY WATER DISTRICT">TANJAY WATER DISTRICT</option>
        <option value="Tarlac State University">Tarlac State University</option>
        <option value="TAWI-TAWI REGIONAL AGRICULTURAL COLLEGE">
          TAWI-TAWI REGIONAL AGRICULTURAL COLLEGE
        </option>
        <option value="TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY">
          TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY
        </option>
        <option value="TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES">
          TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES
        </option>
        <option value="TECHNOLOGY APPLICATION AND PROMOTION INSTITUTE">
          TECHNOLOGY APPLICATION AND PROMOTION INSTITUTE
        </option>
        <option value="THE NATIONAL LIBRARY OF THE PHILIPPINES">
          THE NATIONAL LIBRARY OF THE PHILIPPINES
        </option>
        <option value="Tiaong Water District">Tiaong Water District</option>
        <option value="TOLEDO WATER DISTRICT">TOLEDO WATER DISTRICT</option>
        <option value="TOLL REGULATORY BOARD">TOLL REGULATORY BOARD</option>
        <option value="TONDO MEDICAL CENTER">TONDO MEDICAL CENTER</option>
        <option value="TOURISM INFRASTRUCTURE AND ENTERPRISE ZONE AUTHORITY">
          TOURISM INFRASTRUCTURE AND ENTERPRISE ZONE AUTHORITY
        </option>
        <option value="TOURISM PROMOTIONS BOARD">
          TOURISM PROMOTIONS BOARD
        </option>
        <option value="TUBOD-BAROY WATER DISTRICT">
          TUBOD-BAROY WATER DISTRICT
        </option>
        <option value="UNIVERSITY OF ANTIQUE">UNIVERSITY OF ANTIQUE</option>
        <option value="UNIVERSITY OF EASTERN PHILIPPINES">
          UNIVERSITY OF EASTERN PHILIPPINES
        </option>
        <option value="UNIVERSITY OF NORTHERN PHILIPPINES">
          UNIVERSITY OF NORTHERN PHILIPPINES
        </option>
        <option value="UNIVERSITY OF RIZAL SYSTEM">
          UNIVERSITY OF RIZAL SYSTEM
        </option>
        <option value="UNIVERSITY OF SCIENCE AND TECHNOLOGY OF SOUTHERN PHILIPPINES">
          UNIVERSITY OF SCIENCE AND TECHNOLOGY OF SOUTHERN PHILIPPINES
        </option>
        <option value="UNIVERSITY OF SOUTHEASTERN PHILIPPINES">
          UNIVERSITY OF SOUTHEASTERN PHILIPPINES
        </option>
        <option value="UNIVERSITY OF SOUTHERN MINDANAO">
          UNIVERSITY OF SOUTHERN MINDANAO
        </option>
        <option value="UNIVERSITY OF THE PHILIPPINES">
          UNIVERSITY OF THE PHILIPPINES
        </option>
        <option value="UNIVERSITY OF THE PHILIPPINES PGH MANILA">
          UNIVERSITY OF THE PHILIPPINES PGH MANILA
        </option>
        <option value="URDANETA CITY UNIVERSITY">
          URDANETA CITY UNIVERSITY
        </option>
        <option value="VALENZUELA CITY MEDICAL CENTER">
          VALENZUELA CITY MEDICAL CENTER
        </option>
        <option value="VETERANS MEMORIAL MEDICAL CENTER">
          VETERANS MEMORIAL MEDICAL CENTER
        </option>
        <option value="VICENTE SOTTO MEMORIAL MEDICAL CENTER">
          VICENTE SOTTO MEMORIAL MEDICAL CENTER
        </option>
        <option value="VISAYAS STATE UNIVERSITY">
          VISAYAS STATE UNIVERSITY
        </option>
        <option value="WEST VISAYAS STATE UNIVERSITY">
          WEST VISAYAS STATE UNIVERSITY
        </option>
        <option value="WESTERN MINDANAO STATE UNIVERSITY">
          WESTERN MINDANAO STATE UNIVERSITY
        </option>
        <option value="Western Philippines University">
          Western Philippines University
        </option>
        <option value="WESTERN VISAYAS MEDICAL CENTER">
          WESTERN VISAYAS MEDICAL CENTER
        </option>
        <option value="WESTERN VISAYAS SANITARIUM AND GENERAL HOSPITAL">
          WESTERN VISAYAS SANITARIUM AND GENERAL HOSPITAL
        </option>
        <option value="ZAMBOANGA CITY SPECIAL ECONOMIC ZONE AUTHORITY">
          ZAMBOANGA CITY SPECIAL ECONOMIC ZONE AUTHORITY
        </option>
        <option value="ZAMBOANGA CITY STATE POLYTECHNIC COLLEGE">
          ZAMBOANGA CITY STATE POLYTECHNIC COLLEGE
        </option>
        <option value="ZAMBOANGA CITY WATER DISTRICT">
          ZAMBOANGA CITY WATER DISTRICT
        </option>
        <option value="ZAMBOANGA PENINSULA POLYTECHNIC STATE UNIVERSITY">
          ZAMBOANGA PENINSULA POLYTECHNIC STATE UNIVERSITY
        </option>
      </select>
      <br /> */}

      {/* <label>Filter by region: </label>
      <select onChange={handleChange}>
        <option value="">All regions</option>
        <option value="NCR">NCR</option>
        <option value="Region I">Region I</option>
        <option value="Region II">Region II</option>
        <option value="Region III">Region III</option>
        <option value="Region IV">Region IV</option>
        <option value="Region V">Region V</option>
        <option value="Region VI">Region VI</option>
        <option value="Region VII">Region VII</option>
        <option value="Region VIII">Region VIII</option>
        <option value="Region IX">Region IX</option>
        <option value="Region X">Region X</option>
        <option value="Region XI">Region XI</option>
        <option value="Region XII">Region XII</option>
        <option value="BARMM">BARMM</option>
        <option value="CAR">CAR</option>
        <option value="Central Office (CO)">Central Office (CO)</option>
        <option value="CARAGA">CARAGA</option>
      </select>
      <br /> */}

      <label>Columns: </label>
      <br />

      <input id="agency" type="checkbox" onChange={onAgencyViewChange} />
      <label htmlFor="agency">Agency</label>
      <br />

      <input id="region" type="checkbox" onChange={onRegionViewChange} />
      <label htmlFor="region">Region</label>
      <br />

      <input id="pos-title" type="checkbox" onChange={onPosTitleViewChange} />
      <label htmlFor="pos-title">Position Title</label>
      <br />

      <input id="mon-salary" type="checkbox" onChange={onMonSalaryViewChange} />
      <label htmlFor="mon-salary">Monthly Salary</label>
      <br />

      <input id="item-number" type="checkbox" onChange={onItemNoViewChange} />
      <label htmlFor="item-number">Plantilla Item Number</label>
      <br />

      <input
        id="closing-date"
        type="checkbox"
        onChange={onClosingDateViewChange}
      />
      <label htmlFor="closing-date">Closing Date</label>
      <br />

      {/* <label>Rows: </label>
      <select>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> */}
    </div>
  );
}
