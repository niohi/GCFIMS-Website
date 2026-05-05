/* =========================================
   GC-FIMS SYSTEM LOGIC & AUTHENTICATION
   ========================================= */

const users = [
    // Staff and Admin Accounts
    { account_id: "ADMIN001", password: "123", role: "Admin", name: "ADMINISTRATOR" }, 
    { account_id: "TECH001", password: "123", role: "Teacher", name: "PROFESSOR X" }, 
    { account_id: "Repairman", password: "123", role: "Maintenance Staff", name: "MAINTENANCE STAFF" }, 
    { account_id: "Supervisor", password: "123", role: "Maintenance Supervisor", name: "MAINTENANCE SUPERVISOR" },

    // Student Accounts 
    { email: "202512905@gordoncollege.edu.ph", password: "123", role: "Student", name: "AQUINO, RAFAEL" },
    { email: "202512219@gordoncollege.edu.ph", password: "123", role: "Student", name: "LEDESMA, DANNIEL LAWRENCE" },
    { email: "202511669@gordoncollege.edu.ph", password: "123", role: "Student", name: "ARMERO, MARCO LAWRENCE" },
    { email: "202513107@gordoncollege.edu.ph", password: "123", role: "Student", name: "DELGADO, MATT ANDREI" },
    { email: "202311827@gordoncollege.edu.ph", password: "123", role: "Student", name: "DEMETRIO, SAMANTHA NICOLE" },
    { email: "202513619@gordoncollege.edu.ph", password: "123", role: "Student", name: "DOMINGO, JERSON" },
    { email: "202511705@gordoncollege.edu.ph", password: "123", role: "Student", name: "EDER, ANGEL THERESE" },
    { email: "202512657@gordoncollege.edu.ph", password: "123", role: "Student", name: "ELLANO, JOHN DENVER" },
    { email: "202514653@gordoncollege.edu.ph", password: "123", role: "Student", name: "ENCIO, LEANNE MAE" },
    { email: "202510593@gordoncollege.edu.ph", password: "123", role: "Student", name: "ESTRELLADO, JOHN CHRISTOPHER" },
    { email: "202512033@gordoncollege.edu.ph", password: "123", role: "Student", name: "EYAS, JOHN CARLO" },
    { email: "202510612@gordoncollege.edu.ph", password: "123", role: "Student", name: "FERNANDEZ, LHORD JIAN HERWIN" },
    { email: "202513723@gordoncollege.edu.ph", password: "123", role: "Student", name: "FIEL, JHON DANIELLE" },
    { email: "202510383@gordoncollege.edu.ph", password: "123", role: "Student", name: "FOGATA, CARL JOHN SEBASTIAN" },
    { email: "202512549@gordoncollege.edu.ph", password: "123", role: "Student", name: "GUIAO, RUSSEL" },
    { email: "202512215@gordoncollege.edu.ph", password: "123", role: "Student", name: "HERNANDEZ, ANDREI JENRIX" },
    { email: "202511085@gordoncollege.edu.ph", password: "123", role: "Student", name: "IGNACIO, YVES ZEP" },
    { email: "202512983@gordoncollege.edu.ph", password: "123", role: "Student", name: "JIMENEZ, PRINCESS JOHANNA" },
    { email: "202512391@gordoncollege.edu.ph", password: "123", role: "Student", name: "JORDAN, NASH" },
    { email: "202514545@gordoncollege.edu.ph", password: "123", role: "Student", name: "LABAN, JEFF ASHLEY" },
    { email: "202511006@gordoncollege.edu.ph", password: "123", role: "Student", name: "LABIS, TRISTHAN JAYKE" },
    { email: "202512187@gordoncollege.edu.ph", password: "123", role: "Student", name: "LABRADOR, ARWIN" },
    { email: "202513401@gordoncollege.edu.ph", password: "123", role: "Student", name: "LAGRIMAS, NATHANIEL" },
    { email: "202510525@gordoncollege.edu.ph", password: "123", role: "Student", name: "LAYUG, JOSEPH KYLE" },
    { email: "202511537@gordoncollege.edu.ph", password: "123", role: "Student", name: "LUCBAN, JHON SANDER" },
    { email: "202513957@gordoncollege.edu.ph", password: "123", role: "Student", name: "MADAYAG, RAINIER" },
    { email: "202511115@gordoncollege.edu.ph", password: "123", role: "Student", name: "NAGUIAT, AR-SIE" },
    { email: "202511937@gordoncollege.edu.ph", password: "123", role: "Student", name: "ORDONIO, MHELBHEN JOHN BENEDICT" },
    { email: "202514259@gordoncollege.edu.ph", password: "123", role: "Student", name: "OTEYZA, CLARIZA" },
    { email: "202512601@gordoncollege.edu.ph", password: "123", role: "Student", name: "ROQUE, JOSEPH CARL" },
    { email: "202513413@gordoncollege.edu.ph", password: "123", role: "Student", name: "SORVETO, ARLYN" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Awtomatikong ipasok ang buong listahan sa Admin Dashboard system
    // Ginagawa ito para makita agad ng Admin ang lahat ng users mula sa script.js
    if (!localStorage.getItem('appUsers') || JSON.parse(localStorage.getItem('appUsers')).length < 5) {
        localStorage.setItem('appUsers', JSON.stringify(users));
    }

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            // Get values from the login form inputs[cite: 20]
            const emailInput = loginForm.querySelector('input[name="email"]').value;
            const passInput = loginForm.querySelector('input[name="password"]').value;

            // Search for the user in our list[cite: 20]
            const user = users.find(u => (u.email === emailInput || u.account_id === emailInput) && u.password === passInput);

            if (user) {
                // Save the session to LocalStorage so dashboards can identify who is logged in[cite: 20]
                localStorage.setItem('currentUser', JSON.stringify(user));

                // Redirection logic based on role[cite: 20]
                if (user.role === "Admin") {
                    window.location.href = "admin_dashboard.html";
                } else if (user.role === "Teacher") {
                    window.location.href = "teacher_dashboard.html";
                } else if (user.role === "Maintenance Staff" || user.role === "Maintenance Supervisor") {
                    window.location.href = "maintenance_dashboard.html";
                } else {
                    window.location.href = "student_dashboard.html";
                }
            } else {
                alert("Invalid Email/ID or Password!");
            }
        });
    }
});