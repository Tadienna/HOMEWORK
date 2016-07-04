var NEW_ITEMS = function() {
		ITEMS = {
			item0: ALL_ITEMS().getItems()['item0'],
			item1: ALL_ITEMS().getItems()['item1'],
			item2: ALL_ITEMS().getItems()['item2'],
			item3: ALL_ITEMS().getItems()['item3'],	
			item4: ALL_ITEMS().getItems()['item4'],
			item5: ALL_ITEMS().getItems()['item5'],	
		}
		return {
			getItems: function() {
				return ITEMS;
			}
		}
	}

function Main() {
	var main = {
		ITEMS : NEW_ITEMS().getItems(),
		ELEMENTS : new Object(CREATE_ELEMENTS),
		DRAW : new Object(DRAWER),
		DOLLS : new Object(DRAW_DOLLS),

		CREATE : function(){
			//заглавная фотка
			this.DRAW.AddElem.call(this.ELEMENTS.getMain(),this.DRAW.AddImage('../links/main.jpg','760px'));
			//блок с заголовком
			var newDiv = this.DRAW.AddElem.call(this.ELEMENTS.getMain(),this.ELEMENTS.newElem('div','title'));
			this.DRAW.AddElem.call(newDiv, this.DRAW.Span.call(this.ELEMENTS.newElem('h3'),'НОВИНКИ'));
			
			this.DOLLS.Draw.call(this.ELEMENTS.getMain(), this.ITEMS);
		}


	}
	return main;
}

