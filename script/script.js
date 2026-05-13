/* =========================================
    GC-FIMS SYSTEM LOGIC & AUTHENTICATION
   ========================================= */

const users = [
    // Staff and Admin Accounts
    { account_id: "ADMIN001", password: "admin789", role: "Admin", name: "ADMINISTRATOR" }, 
    { account_id: "TECH001", password: "teacherx", role: "Teacher", name: "PROFESSOR X" }, 
    { account_id: "Maintenance", password: "staff123", role: "Maintenance Staff", name: "MAINTENANCE STAFF" }, 
    { account_id: "Supervisor", password: "super456", role: "Maintenance Supervisor", name: "MAINTENANCE SUPERVISOR" },

    // Student Accounts - Default Password: "gc2026"
    { email: "202512905@gordoncollege.edu.ph", id: "202512905", password: "gc2026", role: "Student", name: "Aquino, Rafael" },
    { email: "202512219@gordoncollege.edu.ph", id: "202512219", password: "gc2026", role: "Student", name: "Ledesma, Danniel Lawrence" },
    { email: "202511669@gordoncollege.edu.ph", id: "202511669", password: "gc2026", role: "Student", name: "Armero, Marco Lawrence" },
    { email: "202513107@gordoncollege.edu.ph", id: "202513107", password: "gc2026", role: "Student", name: "Delgado, Matt Andrei" },
    { email: "202311827@gordoncollege.edu.ph", id: "202311827", password: "gc2026", role: "Student", name: "Demetrio, Samantha Nicole" },
    { email: "202513619@gordoncollege.edu.ph", id: "202513619", password: "gc2026", role: "Student", name: "Domingo, Jerson" },
    { email: "202511705@gordoncollege.edu.ph", id: "202511705", password: "gc2026", role: "Student", name: "Eder, Angel Therese" },
    { email: "202512657@gordoncollege.edu.ph", id: "202512657", password: "gc2026", role: "Student", name: "Ellano, John Denver" },
    { email: "202514653@gordoncollege.edu.ph", id: "202514653", password: "gc2026", role: "Student", name: "Encio, Leanne Mae" },
    { email: "202510593@gordoncollege.edu.ph", id: "202510593", password: "gc2026", role: "Student", name: "Estrellado, John Christopher" },
    { email: "202512033@gordoncollege.edu.ph", id: "202512033", password: "gc2026", role: "Student", name: "Eyas, John Carlo" },
    { email: "202510612@gordoncollege.edu.ph", id: "202510612", password: "gc2026", role: "Student", name: "Fernandez, Lhord Jian Herwin" },
    { email: "202513723@gordoncollege.edu.ph", id: "202513723", password: "gc2026", role: "Student", name: "Fiel, Jhon Danielle" },
    { email: "202510383@gordoncollege.edu.ph", id: "202510383", password: "gc2026", role: "Student", name: "Fogata, Carl John Sebastian" },
    { email: "202512549@gordoncollege.edu.ph", id: "202512549", password: "gc2026", role: "Student", name: "Guiao, Russel" },
    { email: "202512215@gordoncollege.edu.ph", id: "202512215", password: "gc2026", role: "Student", name: "Hernandez, Andrei Jenrix" },
    { email: "202511085@gordoncollege.edu.ph", id: "202511085", password: "gc2026", role: "Student", name: "Ignacio, Yves Zep" },
    { email: "202512983@gordoncollege.edu.ph", id: "202512983", password: "gc2026", role: "Student", name: "Jimenez, Princess Johanna" },
    { email: "202512391@gordoncollege.edu.ph", id: "202512391", password: "gc2026", role: "Student", name: "Jordan, Nash" },
    { email: "202514545@gordoncollege.edu.ph", id: "202514545", password: "gc2026", role: "Student", name: "Laban, Jeff Ashley" },
    { email: "202511006@gordoncollege.edu.ph", id: "202511006", password: "gc2026", role: "Student", name: "Labis, Tristhan Jayke" },
    { email: "202512187@gordoncollege.edu.ph", id: "202512187", password: "gc2026", role: "Student", name: "Labrador, Arwin" },
    { email: "202513401@gordoncollege.edu.ph", id: "202513401", password: "gc2026", role: "Student", name: "Lagrimas, Nathaniel" },
    { email: "202510525@gordoncollege.edu.ph", id: "202510525", password: "gc2026", role: "Student", name: "Layug, Joseph Kyle" },
    { email: "202511537@gordoncollege.edu.ph", id: "202511537", password: "gc2026", role: "Student", name: "Lucban, Jhon Sander" },
    { email: "202513957@gordoncollege.edu.ph", id: "202513957", password: "gc2026", role: "Student", name: "Madayag, Rainier" },
    { email: "202511115@gordoncollege.edu.ph", id: "202511115", password: "gc2026", role: "Student", name: "Naguiat, Ar-Sie" },
    { email: "202511937@gordoncollege.edu.ph", id: "202511937", password: "gc2026", role: "Student", name: "Ordonio, Mhelbhen John Benedict" },
    { email: "202514259@gordoncollege.edu.ph", id: "202514259", password: "gc2026", role: "Student", name: "Oteyza, Clariza" },
    { email: "202512601@gordoncollege.edu.ph", id: "202512601", password: "gc2026", role: "Student", name: "Roque, Joseph Carl" },
    { email: "202513413@gordoncollege.edu.ph", id: "202513413", password: "gc2026", role: "Student", name: "Sorveto, Arlyn" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Initial sync to LocalStorage
    localStorage.setItem('appUsers', JSON.stringify(users));

    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    // FIX: Password Visibility Toggle Logic
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            // Check current type
            const isPassword = passwordInput.getAttribute('type') === 'password';
            
            // Toggle type attribute
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            
            // FIX: Correctly switch classes for FontAwesome 6
            // Simula ay 'fa-eye-slash' (hidden). Pag click magiging 'fa-eye' (visible).
            if (isPassword) {
                this.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                this.classList.replace('fa-eye', 'fa-eye-slash');
            }
        });
    }

    // Login Logic
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const emailValue = loginForm.querySelector('input[name="email"]').value.trim();
            const passValue = passwordInput.value;

            // Security Check
            if (passValue === "123") {
                alert("Security Alert: '123' is too weak and not allowed.");
                return;
            }

            if (passValue.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // Find user
            const user = users.find(u => 
                u.email === emailValue || u.account_id === emailValue || u.id === emailValue
            );

            if (user) {
                // Check password
                if (user.password === passValue) {
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    // Redirection based on role
                    const role = user.role;
                    if (role === "Admin") window.location.href = "admin_dashboard.html";
                    else if (role === "Teacher") window.location.href = "teacher_dashboard.html";
                    else if (role === "Maintenance Staff" || role === "Maintenance Supervisor") window.location.href = "maintenance_dashboard.html";
                    else window.location.href = "student_dashboard.html";
                } else {
                    alert("Your password is incorrect");
                }
            } else {
                alert("Account not found!");
            }
        });
    }
});