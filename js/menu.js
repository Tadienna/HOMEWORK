var MENU_ITEMS = function() {
		ITEMS = {
			item1: {title:'Главная', action:'func1'},
			item2: {title:'Все товары', action:'func2' },
			item3: {title:'На заказ', action:'func3' },
			item4: {title:'Как купить', action:'func4' },
			item5: {title:'Контакты', action:'func5' }
		}
		return {
			getItems: function() {
				return ITEMS;
			}
		}
	}


function Menu() {

	var menu_draw = function() {
		var obj = new Object(DRAWER);
		obj.DRAW_BUT = function(item_name, cl){
			obj.Button.call(this, item_name, cl);
			this.addEventListener('click', ACTIONS[item_name['action']]);
		}
		return obj;
	}

	var menu = {
		ITEMS : MENU_ITEMS().getItems(),
		ELEMENTS : new Object(CREATE_ELEMENTS),
		DRAW : menu_draw(),
		
		NEW_LIST : function(i){
			var NEW_LI = this.ELEMENTS.newElem('li');
			var but = this.ELEMENTS.newElem('button');
			this.DRAW.DRAW_BUT.call(but, this.ITEMS[i]);
			this.DRAW.AddClass.call(but, 'punct');
			if (i == 'item1') this.DRAW.AddClass.call(but, 'active');
			this.DRAW.AddElem.call(NEW_LI, but);
			return NEW_LI;
		},

		NEW_HEAD : function(){
			//рисуем лого
			var HEAD_DIV = this.DRAW.AddElem.call(this.ELEMENTS.getHead(),this.ELEMENTS.newElem('div', 'HEAD_DIV'));
			var newDiv = this.DRAW.AddElem.call(HEAD_DIV,this.ELEMENTS.newElem('div', 'logo'));
			this.DRAW.AddElem.call(newDiv,this.DRAW.AddImage('../links/logo.png','350px'));
			//создаем блок корзины
			newDiv = this.DRAW.AddElem.call(HEAD_DIV,this.ELEMENTS.newElem('div', 'cart'));
			this.DRAW.AddElem.call(newDiv,this.DRAW.AddImage('../links/cart.png','60px'));
			this.DRAW.AddElem.call(newDiv, this.DRAW.Span.call(this.ELEMENTS.newElem('span'),'<br>КОРЗИНА'));
			this.DRAW.AddElem.call(newDiv, this.DRAW.Span.call(this.ELEMENTS.newElem('span'),'<b><br>0 товаров</b>'));
		},


		//функция быстрого доступа к элементам меню
		// SET_MENU : function(i){
		// 	var menu_puncts = document.getElementsByClassName('punct');
		// 	for (var i = 0; i<menu_puncts.lenght; i++){
		// 		console.log(menu_puncts[i]);
		// 	}
		// },

		CREATE : function() {
			// рисуем верхнюю полоску
			this.DRAW.AddElem.call(this.ELEMENTS.getHead(),this.ELEMENTS.newElem('div','upper'));
			//рисуем шапку
			this.NEW_HEAD();
			//создаем меню
			var NEW_UL = this.ELEMENTS.newElem('ul');
			this.DRAW.AddElem.call(this.ELEMENTS.getHead(),NEW_UL);

				for (var i in this.ITEMS)
				{	
					this.DRAW.AddElem.call(NEW_UL, this.NEW_LIST(i));
				}
		}

	};

	return menu;
}











