var SALE_ITEMS = function() {
		ITEMS = {
			item0: ALL_ITEMS().getItems()['item0'],
			item1: ALL_ITEMS().getItems()['item2'],
			item2: ALL_ITEMS().getItems()['item3'],
			item3: ALL_ITEMS().getItems()['item4'],		

		}
		return {
			getItems: function() {
				return ITEMS;
			}
		}
	}

function ForSale() {
	var sale = {
		ITEMS : SALE_ITEMS().getItems(),
		ELEMENTS : new Object(CREATE_ELEMENTS),
		DRAW : new Object(DRAWER),
		DOLLS : new Object(DRAW_DOLLS),

		CREATE : function(){
			//блок с заголовком
			var newDiv = this.DRAW.AddElem.call(this.ELEMENTS.getMain(),this.ELEMENTS.newElem('div','title'));
			this.DRAW.AddElem.call(newDiv, this.DRAW.Span.call(this.ELEMENTS.newElem('h3'),'СЕГОДНЯ В ПРОДАЖЕ'));
			
			this.DOLLS.Draw.call(this.ELEMENTS.getMain(), this.ITEMS);
		}

	}
	return sale;
}