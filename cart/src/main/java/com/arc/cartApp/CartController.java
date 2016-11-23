package com.arc.cartApp;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping(value="/cart")
public class CartController {
	
	
	@RequestMapping(value="/listitems", method = RequestMethod.GET)
	public List<Item> ListItems()
	{
		return 	ItemService.listitems();
	
	}
	@RequestMapping(value="/additems", method = RequestMethod.POST)
	public List<Item> addItem(@RequestBody List<Item> itemsList)
	{
		return ItemService.addItems(itemsList);
		
	}
	
	@RequestMapping(value="/calbill", method = RequestMethod.GET)
	public BillItem getBill(){
		Map<String, Double> billMap =new HashMap<String,Double>();
		double amt=ItemService.getTotalAmount();
		double tax=ItemService.getTotalTaxAmount();
		double bill=amt+tax;
		billMap.put("TotalAmount ",amt);
		billMap.put("TotalTax ",tax);
		billMap.put("TotalBill ",bill);
		
		
		BillItem billObj= new BillItem();
		billObj.setAmt(amt);
		billObj.setBill(bill);
		billObj.setTax(tax);
		
		return billObj;
		
	}
	@RequestMapping(value="/deleteitem", method = RequestMethod.GET)
	public List<Item> deleteItem(@RequestParam(value="id") int id){
		
		return ItemService.deleteItem(id);
		
	}
	
	@RequestMapping(value="/add", method = RequestMethod.POST)
	public List<Item>  addItem(@RequestBody Item item){
		
		return ItemService.addItem(item);
		
	}
	
}