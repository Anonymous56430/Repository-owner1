// بيانات نظام إدارة الموظفين
const employeesData = {
    employees: [
        { 
            id: 1, 
            name: 'أحمد محمد', 
            email: 'ahmed@company.com', 
            phone: '+966501234567', 
            department: 'تكنولوجيا المعلومات',
            position: 'مطور Python أول', 
            salary: 15000, 
            hireDate: '2022-03-15', 
            status: 'نشط',
            notes: 'موظف متميز'
        },
        { 
            id: 2, 
            name: 'فاطمة عبدالله', 
            email: 'fatima@company.com', 
            phone: '+966502345678', 
            department: 'المبيعات',
            position: 'مدير مبيعات', 
            salary: 12000, 
            hireDate: '2021-07-20', 
            status: 'نشط',
            notes: 'أداء متميز في المبيعات'
        },
        { 
            id: 3, 
            name: 'خالد سعيد', 
            email: 'khaled@company.com', 
            phone: '+966503456789', 
            department: 'التسويق',
            position: 'أخصائي تسويق', 
            salary: 10000, 
            hireDate: '2023-01-10', 
            status: 'إجازة',
            notes: 'في إجازة سنوية'
        },
        { 
            id: 4, 
            name: 'سارة ناصر', 
            email: 'sara@company.com', 
            phone: '+966504567890', 
            department: 'المالية',
            position: 'محاسب', 
            salary: 11000, 
            hireDate: '2020-11-05', 
            status: 'نشط',
            notes: 'مسؤولة عن الحسابات'
        },
        { 
            id: 5, 
            name: 'محمد علي', 
            email: 'mohammed@company.com', 
            phone: '+966505678901', 
            department: 'الموارد البشرية',
            position: 'مسؤول موارد بشرية', 
            salary: 13000, 
            hireDate: '2019-08-12', 
            status: 'نشط',
            notes: 'مسؤول عن التوظيف'
        }
    ],
    
    attendance: [
        { 
            id: 1, 
            employeeId: 1, 
            date: '2024-01-15', 
            checkIn: '08:00', 
            checkOut: '17:00', 
            hours: 9,
            status: 'حاضر'
        },
        { 
            id: 2, 
            employeeId: 2, 
            date: '2024-01-15', 
            checkIn: '08:15', 
            checkOut: '17:00', 
            hours: 8.75,
            status: 'متأخر'
        },
        { 
            id: 3, 
            employeeId: 3, 
            date: '2024-01-15', 
            checkIn: null, 
            checkOut: null, 
            hours: 0,
            status: 'غائب'
        },
        { 
            id: 4, 
            employeeId: 4, 
            date: '2024-01-15', 
            checkIn: '08:00', 
            checkOut: '17:00', 
            hours: 9,
            status: 'حاضر'
        },
        { 
            id: 5, 
            employeeId: 5, 
            date: '2024-01-15', 
            checkIn: '08:05', 
            checkOut: '17:00', 
            hours: 8.92,
            status: 'حاضر'
        }
    ],
    
    leaves: [
        { 
            id: 1, 
            employeeId: 3, 
            employeeName: 'خالد سعيد',
            type: 'سنوية', 
            startDate: '2024-01-10', 
            endDate: '2024-01-20', 
            duration: 10,
            reason: 'إجازة سنوية',
            status: 'موافق عليها'
        },
        { 
            id: 2, 
            employeeId: 1, 
            employeeName: 'أحمد محمد',
            type: 'مرضية', 
            startDate: '2024-01-25', 
            endDate: '2024-01-26', 
            duration: 2,
            reason: 'مرض',
            status: 'معلقة'
        }
    ],
    
    payroll: [
        { 
            id: 1, 
            employeeId: 1, 
            employeeName: 'أحمد محمد',
            month: '2024-01', 
            basicSalary: 15000, 
            allowances: 2000, 
            deductions: 500,
            netSalary: 16500,
            status: 'مسدد'
        },
        { 
            id: 2, 
            employeeId: 2, 
            employeeName: 'فاطمة عبدالله',
            month: '2024-01', 
            basicSalary: 12000, 
            allowances: 1500, 
            deductions: 300,
            netSalary: 13200,
            status: 'مسدد'
        }
    ],
    
    analytics: {
        totalEmployees: 45,
        presentToday: 38,
        currentLeaves: 7,
        totalPayroll: 585000
    }
};

// تهيئة لوحة التحكم
document.addEventListener('DOMContentLoaded', function() {
    initEmployeesDashboard();
});

function initEmployeesDashboard() {
    // التحقق من تسجيل الدخول
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // إذا لم يكن هناك مستخدم مسجل، إنشاء واحد افتراضي للاختبار
        const defaultUser = {
            full_name: 'مدير الموارد البشرية',
            username: 'hr_admin',
            role: 'hr_manager'
        };
        localStorage.setItem('currentUser', JSON.stringify(defaultUser));
        currentUser = defaultUser;
    }

    // تحديث معلومات المستخدم
    document.getElementById('userFullName').textContent = `مرحباً، ${currentUser.full_name}`;
    
    // تحديث التاريخ
    updateCurrentDate();
    
    // تحديث لوحة التحكم
    updateDashboard();
    
    // تحميل الموظفين
    loadEmployees();
    
    // تحميل الحضور
    loadAttendance();
    
    // تحميل الإجازات
    loadLeaves();
    
    // تحميل الرواتب
    loadPayroll();
    
    // تحميل الرسوم البيانية
    loadCharts();
}

// تحديث التاريخ الحالي
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Riyadh'
    };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('ar-SA', options);
    
    // تعيين التاريخ الحالي في فلاتر الحضور
    const today = now.toISOString().split('T')[0];
    document.getElementById('attendanceDate').value = today;
    
    // تعيين الشهر الحالي في فلاتر الرواتب
    const currentMonth = now.toISOString().substring(0, 7);
    document.getElementById('payrollMonth').value = currentMonth;
}

// تحديث لوحة التحكم
function updateDashboard() {
    updateStats();
    updateRecentEmployees();
    updateUpcomingLeaves();
}

// تحديث الإحصائيات
function updateStats() {
    document.getElementById('totalEmployees').textContent = employeesData.analytics.totalEmployees.toLocaleString();
    document.getElementById('presentToday').textContent = employeesData.analytics.presentToday.toLocaleString();
    document.getElementById('currentLeaves').textContent = employeesData.analytics.currentLeaves.toLocaleString();
    document.getElementById('totalPayroll').textContent = employeesData.analytics.totalPayroll.toLocaleString('ar-SA', { minimumFractionDigits: 2 });
}

// تحديث أحدث الموظفين
function updateRecentEmployees() {
    const tbody = document.getElementById('recentEmployees');
    tbody.innerHTML = '';
    
    employeesData.employees
        .slice(0, 5)
        .forEach(employee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.position}</td>
                <td>${employee.hireDate}</td>
                <td><span class="status-${employee.status}">${employee.status}</span></td>
                <td>
                    <button class="btn btn-small btn-info" onclick="viewEmployee(${employee.id})">عرض</button>
                    <button class="btn btn-small" onclick="editEmployee(${employee.id})">تعديل</button>
                </td>
            `;
            tbody.appendChild(row);
        });
}

// تحديث الإجازات القادمة
function updateUpcomingLeaves() {
    const tbody = document.getElementById('upcomingLeaves');
    tbody.innerHTML = '';
    
    employeesData.leaves
        .filter(leave => new Date(leave.startDate) >= new Date())
        .slice(0, 5)
        .forEach(leave => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${leave.employeeName}</td>
                <td>${leave.type}</td>
                <td>${leave.startDate}</td>
                <td>${leave.endDate}</td>
                <td>${leave.duration} يوم</td>
                <td><span class="leave-${leave.status}">${leave.status}</span></td>
            `;
            tbody.appendChild(row);
        });
}

// تحميل الرسوم البيانية
function loadCharts() {
    // رسم بياني لتوزيع الموظفين حسب الإدارات
    const departmentsCtx = document.getElementById('departmentsChart').getContext('2d');
    const departmentsChart = new Chart(departmentsCtx, {
        type: 'pie',
        data: {
            labels: ['تكنولوجيا المعلومات', 'المبيعات', 'التسويق', 'المالية', 'الموارد البشرية'],
            datasets: [{
                data: [12, 10, 8, 7, 8],
                backgroundColor: [
                    '#3498db',
                    '#e74c3c',
                    '#f39c12',
                    '#27ae60',
                    '#9b59b6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            }
        }
    });

    // رسم بياني لنسبة الحضور الشهرية
    const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(attendanceCtx, {
        type: 'bar',
        data: {
            labels: ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'],
            datasets: [{
                label: 'نسبة الحضور',
                data: [95, 92, 88, 96],
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// تحميل الموظفين
function loadEmployees() {
    const tbody = document.getElementById('employeesTable');
    tbody.innerHTML = '';
    
    employeesData.employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.position}</td>
            <td>${employee.email}</td>
            <td>${employee.phone}</td>
            <td>${employee.hireDate}</td>
            <td><span class="status-${employee.status}">${employee.status}</span></td>
            <td>
                <button class="btn btn-small btn-info" onclick="viewEmployee(${employee.id})">عرض</button>
                <button class="btn btn-small" onclick="editEmployee(${employee.id})">تعديل</button>
                <button class="btn btn-small btn-danger" onclick="deleteEmployee(${employee.id})">حذف</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// تصفية الموظفين
function filterEmployees() {
    const departmentFilter = document.getElementById('departmentFilter').value;
    const statusFilter = document.getElementById('employeeStatusFilter').value;
    
    const filteredEmployees = employeesData.employees.filter(employee => {
        const departmentMatch = !departmentFilter || employee.department === departmentFilter;
        const statusMatch = !statusFilter || employee.status === statusFilter;
        return departmentMatch && statusMatch;
    });
    
    const tbody = document.getElementById('employeesTable');
    tbody.innerHTML = '';
    
    filteredEmployees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.position}</td>
            <td>${employee.email}</td>
            <td>${employee.phone}</td>
            <td>${employee.hireDate}</td>
            <td><span class="status-${employee.status}">${employee.status}</span></td>
            <td>
                <button class="btn btn-small btn-info" onclick="viewEmployee(${employee.id})">عرض</button>
                <button class="btn btn-small" onclick="editEmployee(${employee.id})">تعديل</button>
                <button class="btn btn-small btn-danger" onclick="deleteEmployee(${employee.id})">حذف</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// تحميل الحضور
function loadAttendance() {
    const dateFilter = document.getElementById('attendanceDate').value;
    const departmentFilter = document.getElementById('attendanceDepartmentFilter').value;
    
    const tbody = document.getElementById('attendanceTable');
    tbody.innerHTML = '';
    
    employeesData.attendance.forEach(record => {
        const employee = employeesData.employees.find(emp => emp.id === record.employeeId);
        
        if ((!dateFilter || record.date === dateFilter) && 
            (!departmentFilter || employee.department === departmentFilter)) {
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${record.checkIn || '--:--'}</td>
                <td>${record.checkOut || '--:--'}</td>
                <td>${record.hours} ساعة</td>
                <td><span class="attendance-${record.status}">${record.status}</span></td>
                <td>
                    <button class="btn btn-small btn-info" onclick="viewAttendance(${record.id})">عرض</button>
                    <button class="btn btn-small" onclick="editAttendance(${record.id})">تعديل</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    });
}

// تحميل الإجازات
function loadLeaves() {
    const tbody = document.getElementById('leavesTable');
    tbody.innerHTML = '';
    
    employeesData.leaves.forEach(leave => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${leave.employeeName}</td>
            <td>${leave.type}</td>
            <td>${leave.startDate}</td>
            <td>${leave.endDate}</td>
            <td>${leave.duration} يوم</td>
            <td><span class="leave-${leave.status}">${leave.status}</span></td>
            <td>
                <button class="btn btn-small btn-info" onclick="viewLeave(${leave.id})">عرض</button>
                <button class="btn btn-small" onclick="editLeave(${leave.id})">تعديل</button>
                <button class="btn btn-small btn-danger" onclick="deleteLeave(${leave.id})">حذف</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// تصفية الإجازات
function filterLeaves() {
    const typeFilter = document.getElementById('leaveTypeFilter').value;
    const statusFilter = document.getElementById('leaveStatusFilter').value;
    
    const filteredLeaves = employeesData.leaves.filter(leave => {
        const typeMatch = !typeFilter || leave.type === typeFilter;
        const statusMatch = !statusFilter || leave.status === statusFilter;
        return typeMatch && statusMatch;
    });
    
    const tbody = document.getElementById('leavesTable');
    tbody.innerHTML = '';
    
    filteredLeaves.forEach(leave => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${leave.employeeName}</td>
            <td>${leave.type}</td>
            <td>${leave.startDate}</td>
            <td>${leave.endDate}</td>
            <td>${leave.duration} يوم</td>
            <td><span class="leave-${leave.status}">${leave.status}</span></td>
            <td>
                <button class="btn btn-small btn-info" onclick="viewLeave(${leave.id})">عرض</button>
                <button class="btn btn-small" onclick="editLeave(${leave.id})">تعديل</button>
                <button class="btn btn-small btn-danger" onclick="deleteLeave(${leave.id})">حذف</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// تحميل الرواتب
function loadPayroll() {
    const monthFilter = document.getElementById('payrollMonth').value;
    const statusFilter = document.getElementById('payrollStatusFilter').value;
    
    const tbody = document.getElementById('payrollTable');
    tbody.innerHTML = '';
    
    employeesData.payroll.forEach(payroll => {
        if ((!monthFilter || payroll.month === monthFilter) && 
            (!statusFilter || payroll.status === statusFilter)) {
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payroll.employeeName}</td>
                <td>${employeesData.employees.find(emp => emp.id === payroll.employeeId).department}</td>
                <td>${payroll.basicSalary.toLocaleString('ar-SA', { minimumFractionDigits: 2 })}</td>
                <td>${payroll.allowances.toLocaleString('ar-SA', { minimumFractionDigits: 2 })}</td>
                <td>${payroll.deductions.toLocaleString('ar-SA', { minimumFractionDigits: 2 })}</td>
                <td>${payroll.netSalary.toLocaleString('ar-SA', { minimumFractionDigits: 2 })}</td>
                <td><span class="payroll-${payroll.status}">${payroll.status}</span></td>
                <td>
                    <button class="btn btn-small btn-info" onclick="viewPayroll(${payroll.id})">عرض</button>
                    <button class="btn btn-small" onclick="editPayroll(${payroll.id})">تعديل</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    });
}

// دوال التنقل والواجهة
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function showTab(tabName) {
    // إخفاء كل المحتويات
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // إزالة النشاط من كل روابط القائمة
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // إظهار المحتوى المطلوب
    document.getElementById(tabName).style.display = 'block';
    
    // إضافة النشاط للرابط المحدد
    document.querySelector(`.sidebar-menu a[onclick="showTab('${tabName}')"]`).classList.add('active');
    
    // تحديث البيانات إذا لزم الأمر
    if (tabName === 'dashboard') {
        updateDashboard();
    } else if (tabName === 'employees') {
        loadEmployees();
    } else if (tabName === 'attendance') {
        loadAttendance();
    } else if (tabName === 'leaves') {
        loadLeaves();
    } else if (tabName === 'payroll') {
        loadPayroll();
    }
}

function showReportTab(reportName) {
    // إخفاء كل محتويات التقارير
    document.querySelectorAll('.report-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // إزالة النشاط من كل تبويبات التقارير
    document.querySelectorAll('.tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // إظهار التقرير المطلوب
    document.getElementById(reportName).style.display = 'block';
    
    // إضافة النشاط للتبويب المحدد
    event.target.classList.add('active');
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

// دوال إدارة الموظفين
function showAddEmployeeModal() {
    document.getElementById('addEmployeeModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveEmployee() {
    const name = document.getElementById('employeeName').value;
    const email = document.getElementById('employeeEmail').value;
    const phone = document.getElementById('employeePhone').value;
    const department = document.getElementById('employeeDepartment').value;
    const position = document.getElementById('employeePosition').value;
    const salary = parseFloat(document.getElementById('employeeSalary').value);
    const hireDate = document.getElementById('employeeHireDate').value;
    const status = document.getElementById('employeeStatus').value;
    const notes = document.getElementById('employeeNotes').value;
    
    if (!name || !email || !phone || !position || !salary) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const newEmployee = {
        id: employeesData.employees.length + 1,
        name,
        email,
        phone,
        department,
        position,
        salary,
        hireDate,
        status,
        notes
    };
    
    employeesData.employees.push(newEmployee);
    employeesData.analytics.totalEmployees++;
    closeModal('addEmployeeModal');
    loadEmployees();
    updateRecentEmployees();
    updateStats();
    
    alert('تم إضافة الموظف بنجاح');
}

function viewEmployee(id) {
    const employee = employeesData.employees.find(e => e.id === id);
    if (employee) {
        alert(`عرض تفاصيل الموظف:\nالاسم: ${employee.name}\nالبريد: ${employee.email}\nالهاتف: ${employee.phone}\nالقسم: ${employee.department}\nالوظيفة: ${employee.position}\nالراتب: ${employee.salary.toLocaleString()}\nتاريخ التعيين: ${employee.hireDate}\nالحالة: ${employee.status}\nملاحظات: ${employee.notes}`);
    }
}

function editEmployee(id) {
    const employee = employeesData.employees.find(e => e.id === id);
    if (employee) {
        alert(`تعديل الموظف: ${employee.name}`);
    }
}

function deleteEmployee(id) {
    if (confirm('هل أنت متأكد من حذف هذا الموظف؟')) {
        const index = employeesData.employees.findIndex(e => e.id === id);
        if (index !== -1) {
            employeesData.employees.splice(index, 1);
            employeesData.analytics.totalEmployees--;
            loadEmployees();
            updateRecentEmployees();
            updateStats();
            alert('تم حذف الموظف بنجاح');
        }
    }
}

function exportEmployees() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "المعرف,الاسم,البريد الإلكتروني,الهاتف,القسم,الوظيفة,الراتب,تاريخ التعيين,الحالة,ملاحظات\n"
        + employeesData.employees.map(employee => 
            `${employee.id},${employee.name},${employee.email},${employee.phone},${employee.department},${employee.position},${employee.salary},${employee.hireDate},${employee.status},${employee.notes}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "الموظفين.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال إدارة الإجازات
function showAddLeaveModal() {
    // ملء قائمة الموظفين في النافذة المنبثقة
    const employeeSelect = document.getElementById('leaveEmployee');
    employeeSelect.innerHTML = '';
    
    employeesData.employees.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.id;
        option.textContent = employee.name;
        employeeSelect.appendChild(option);
    });
    
    document.getElementById('addLeaveModal').style.display = 'flex';
}

function saveLeave() {
    const employeeId = parseInt(document.getElementById('leaveEmployee').value);
    const type = document.getElementById('leaveType').value;
    const startDate = document.getElementById('leaveStartDate').value;
    const endDate = document.getElementById('leaveEndDate').value;
    const reason = document.getElementById('leaveReason').value;
    
    if (!employeeId || !startDate || !endDate) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    const employee = employeesData.employees.find(e => e.id === employeeId);
    
    const newLeave = {
        id: employeesData.leaves.length + 1,
        employeeId,
        employeeName: employee.name,
        type,
        startDate,
        endDate,
        duration,
        reason,
        status: 'معلقة'
    };
    
    employeesData.leaves.push(newLeave);
    closeModal('addLeaveModal');
    loadLeaves();
    updateUpcomingLeaves();
    
    alert('تم تقديم طلب الإجازة بنجاح');
}

function viewLeave(id) {
    const leave = employeesData.leaves.find(l => l.id === id);
    if (leave) {
        alert(`عرض تفاصيل الإجازة:\nالموظف: ${leave.employeeName}\nنوع الإجازة: ${leave.type}\nمن: ${leave.startDate}\nإلى: ${leave.endDate}\nالمدة: ${leave.duration} يوم\nالسبب: ${leave.reason}\nالحالة: ${leave.status}`);
    }
}

function editLeave(id) {
    const leave = employeesData.leaves.find(l => l.id === id);
    if (leave) {
        alert(`تعديل طلب الإجازة: ${leave.employeeName}`);
    }
}

function deleteLeave(id) {
    if (confirm('هل أنت متأكد من حذف طلب الإجازة هذا؟')) {
        const index = employeesData.leaves.findIndex(l => l.id === id);
        if (index !== -1) {
            employeesData.leaves.splice(index, 1);
            loadLeaves();
            updateUpcomingLeaves();
            alert('تم حذف طلب الإجازة بنجاح');
        }
    }
}

function exportLeaves() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "المعرف,اسم الموظف,نوع الإجازة,من تاريخ,إلى تاريخ,المدة,السبب,الحالة\n"
        + employeesData.leaves.map(leave => 
            `${leave.id},${leave.employeeName},${leave.type},${leave.startDate},${leave.endDate},${leave.duration},${leave.reason},${leave.status}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "الإجازات.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال إدارة الحضور
function viewAttendance(id) {
    const attendance = employeesData.attendance.find(a => a.id === id);
    if (attendance) {
        const employee = employeesData.employees.find(e => e.id === attendance.employeeId);
        alert(`عرض تفاصيل الحضور:\nالموظف: ${employee.name}\nالتاريخ: ${attendance.date}\nوقت الحضور: ${attendance.checkIn || '--:--'}\nوقت الانصراف: ${attendance.checkOut || '--:--'}\nساعات العمل: ${attendance.hours}\nالحالة: ${attendance.status}`);
    }
}

function editAttendance(id) {
    const attendance = employeesData.attendance.find(a => a.id === id);
    if (attendance) {
        alert(`تعديل سجل الحضور`);
    }
}

function exportAttendance() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "المعرف,اسم الموظف,التاريخ,وقت الحضور,وقت الانصراف,ساعات العمل,الحالة\n"
        + employeesData.attendance.map(record => {
            const employee = employeesData.employees.find(e => e.id === record.employeeId);
            return `${record.id},${employee.name},${record.date},${record.checkIn || '--:--'},${record.checkOut || '--:--'},${record.hours},${record.status}`;
        }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "الحضور.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال إدارة الرواتب
function viewPayroll(id) {
    const payroll = employeesData.payroll.find(p => p.id === id);
    if (payroll) {
        alert(`عرض تفاصيل الراتب:\nالموظف: ${payroll.employeeName}\nالشهر: ${payroll.month}\nالراتب الأساسي: ${payroll.basicSalary.toLocaleString()}\nالبدلات: ${payroll.allowances.toLocaleString()}\nالخصومات: ${payroll.deductions.toLocaleString()}\nصافي الراتب: ${payroll.netSalary.toLocaleString()}\nالحالة: ${payroll.status}`);
    }
}

function editPayroll(id) {
    const payroll = employeesData.payroll.find(p => p.id === id);
    if (payroll) {
        alert(`تعديل كشف الراتب: ${payroll.employeeName}`);
    }
}

function exportPayroll() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "المعرف,اسم الموظف,الشهر,الراتب الأساسي,البدلات,الخصومات,صافي الراتب,الحالة\n"
        + employeesData.payroll.map(payroll => 
            `${payroll.id},${payroll.employeeName},${payroll.month},${payroll.basicSalary},${payroll.allowances},${payroll.deductions},${payroll.netSalary},${payroll.status}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "الرواتب.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال أخرى للوظائف المستقبلية
function showAttendanceReport() {
    alert('وظيفة تقرير الحضور - قيد التطوير');
}

function showPayrollReport() {
    alert('وظيفة تقرير الرواتب - قيد التطوير');
}

function showAddEvaluationModal() {
    alert('وظيفة إضافة تقييم - قيد التطوير');
}

// إضافة تنسيقات CSS ديناميكية
const style = document.createElement('style');
style.textContent = `
    .status-active { background-color: #27ae60; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .status-leave { background-color: #f39c12; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .status-resigned { background-color: #e74c3c; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .status-terminated { background-color: #95a5a6; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .leave-pending { background-color: #f39c12; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .leave-approved { background-color: #27ae60; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .leave-rejected { background-color: #e74c3c; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .payroll-paid { background-color: #27ae60; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .payroll-pending { background-color: #f39c12; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .payroll-cancelled { background-color: #e74c3c; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .attendance-present { background-color: #27ae60; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .attendance-absent { background-color: #e74c3c; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .attendance-late { background-color: #f39c12; color: white; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem; }
    .btn-small { padding: 0.25rem 0.5rem; font-size: 0.8rem; margin: 0 0.1rem; }
`;
document.head.appendChild(style);