var ORDER_ITEMS = function() {
		ITEMS = {
			item0: ALL_ITEMS().getItems()['item1'],
			item1: ALL_ITEMS().getItems()['item5'],
		}
		return {
			getItems: function() {
				return ITEMS;
			}
		}
	}

function ToOrder() {
	var order = {
		ITEMS : ORDER_ITEMS().getItems(),
		ELEMENTS : new Object(CREATE_ELEMENTS),
		DRAW : new Object(DRAWER),
		DOLLS : new Object(DRAW_DOLLS),

		CREATE : function(){
			//блок с заголовком
			var newDiv = this.DRAW.AddElem.call(this.ELEMENTS.getMain(),this.ELEMENTS.newElem('div','title'));
			this.DRAW.AddElem.call(newDiv, this.DRAW.Span.call(this.ELEMENTS.newElem('h3'),'КУКЛЫ ТОЛЬКО ПОД ЗАКАЗ'));
			
			this.DOLLS.Draw.call(this.ELEMENTS.getMain(), this.ITEMS);
		}

	}
	return order;
}