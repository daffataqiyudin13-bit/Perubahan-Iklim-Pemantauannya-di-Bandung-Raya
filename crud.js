
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reg-form');
    const tbody = document.getElementById('crud-body');
    if(!form && !tbody) return;

    let db = JSON.parse(localStorage.getItem('eco_v3_data')) || [];

    const render = () => {
        if(!tbody) return;
        tbody.innerHTML = '';
        db.forEach(item => {
            tbody.innerHTML += `
                <tr>
                    <td><strong>${item.com}</strong><br><small class="text-muted">${item.name}</small></td>
                    <td>${item.act}</td>
                    <td>${item.loc}</td>
                    <td>${item.date}</td>
                    <td>
                        <button class="btn btn-outline" style="padding:6px 12px" onclick="del('${item.id}')"><i class="fa-solid fa-trash text-danger"></i></button>
                    </td>
                </tr>`;
        });
    };

    window.del = (id) => {
        db = db.filter(x => x.id !== id);
        localStorage.setItem('eco_v3_data', JSON.stringify(db));
        render();
    };

    if(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const payload = {
                id: Date.now().toString(),
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                com: document.getElementById('com').value,
                act: document.getElementById('act').value,
                loc: document.getElementById('loc').value,
                date: document.getElementById('date').value
            };
            db.push(payload);
            localStorage.setItem('eco_v3_data', JSON.stringify(db));
            form.reset();
            alert('Registration Successful!');
            render();
        });
    }
    render();
});
