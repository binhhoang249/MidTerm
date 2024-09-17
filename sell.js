function add() {
    const imageURL = document.getElementById('imageURL').value;
    const pname = document.getElementById('pname').value;

    const newPrice = document.getElementById('newPrice').value;
    const discount = document.getElementById('discount').value;
    const code = document.getElementById('code').value;

    if (!pname || !imageURL || !newPrice || !discount || !code) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    const item = `
        <div class="card">
            <div class="card-body">
                <img src="${imageURL}" alt="Product Image" />
                <h5 class="card-title">${pname}, ${code}</h5>
                <p class="card-text">
                    New Price: ${newPrice} <br>
                    Discount: ${discount}% <br>
                </p>
                <a href="#" class="btn btn-primary">Đặt mua</a>
            </div>
        </div>`;
    document.getElementById('items').innerHTML += item;
}
