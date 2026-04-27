# 📘 Complete Notes: Date in **JavaScript**

Goal:
Date object ko **simple + practical + real website use** ke saath samajhna.

---

# 1️⃣ What is Date Object?

**Definition**

> Date object JavaScript me **date aur time ko create, read aur manipulate karne ke liye use hota hai.**

Example uses:

* current time
* current date
* countdown timer
* user login time
* blog post date
* order time

---

# 2️⃣ Create Date Object

### Current Date and Time


let now = new Date();
console.log(now);


Example Output


Sat Apr 19 2026 21:10:15 GMT+0530


---

# 3️⃣ Create Specific Date

### Method 1


let d = new Date("2025-12-25");
console.log(d);


### Method 2


let d = new Date(2025, 11, 25);


⚠️ Month **0 se start hota hai**

| Month | Number |
| ----- | ------ |
| Jan   | 0      |
| Feb   | 1      |
| Mar   | 2      |
| Apr   | 3      |
| May   | 4      |
| Jun   | 5      |
| Jul   | 6      |
| Aug   | 7      |
| Sep   | 8      |
| Oct   | 9      |
| Nov   | 10     |
| Dec   | 11     |

---

# 4️⃣ Important Get Methods

Date se information nikalne ke methods.

### Get Year


let d = new Date();
console.log(d.getFullYear());


Output


2026


---

### Get Month


d.getMonth()


Output


0 - 11


---

### Get Date (Day of Month)


d.getDate()


Output


1 - 31


---

### Get Day (Week Day)


d.getDay()


| Day       | Value |
| --------- | ----- |
| Sunday    | 0     |
| Monday    | 1     |
| Tuesday   | 2     |
| Wednesday | 3     |
| Thursday  | 4     |
| Friday    | 5     |
| Saturday  | 6     |

---

# 5️⃣ Time Methods


let d = new Date();

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());


Example Output


21
45
10


---

# 6️⃣ Set Date Methods

Date change karne ke methods.

### Set Year


d.setFullYear(2030);


### Set Month


d.setMonth(5);


### Set Date


d.setDate(15);


---

# 7️⃣ Convert Date to String


let d = new Date();

console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toLocaleDateString());


Example


Sat Apr 19 2026
21:40:10 GMT+0530
19/4/2026


---

# 8️⃣ Get Timestamp (Very Important)

Timestamp = milliseconds since **1 Jan 1970**


Date.now()


Example


1713539999999


Use case:

* performance measurement
* timers
* API timestamps

---

# 9️⃣ Date Difference (Common Question)

Example: find days between dates.


let d1 = new Date("2026-04-01");
let d2 = new Date("2026-04-19");

let diff = d2 - d1;

let days = diff / (1000 * 60 * 60 * 24);

console.log(days);


Output


18


---

# 🔟 Real Website Use (Most Important Part)

Real websites me Date object ka use **3 jagah sabse jyada hota hai**.

---

## 1️⃣ Show Current Date

Example: blog website


Published on: 19 April 2026


Code


let today = new Date();
document.getElementById("date").innerText = today.toDateString();


---

## 2️⃣ Digital Clock

Example: dashboard / admin panel


21:50:10


Code


setInterval(() => {

let now = new Date();

let time =
now.getHours() + ":" +
now.getMinutes() + ":" +
now.getSeconds();

console.log(time);

},1000);


---

## 3️⃣ Time Ago (Most Used Feature)

Example:


2 minutes ago
3 hours ago
1 day ago


Used in:

* social media
* comments
* posts

Example websites:

* Facebook
* YouTube
* Instagram

---

# 1️⃣1️⃣ Real Production Libraries

Large websites mostly use libraries instead of raw Date.

Popular ones:

* **Moment.js**
* **Day.js**
* **date-fns**

Because Date object kabhi kabhi complicated hota hai.

---

# 1️⃣2️⃣ Most Used Methods in Real Projects

Real production code me mostly ye use hota hai:


new Date()
Date.now()
getFullYear()
getMonth()
getDate()
getHours()
toLocaleDateString()
toISOString()


---

# ⭐ Golden Interview Line

> The Date object in JavaScript is used to create, manipulate, and format date and time values.

