class SalesController {
  index(request, response) {
    const sales = Array(7)
                  .fill({ name: 'Venda' })
                  .map((item, index) => (`${item.name} ${index + 1}`));
        
    return response.json(sales);
  }
}

module.exports = SalesController;