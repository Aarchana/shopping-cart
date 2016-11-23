package com.arc.cartApp;

import java.util.ArrayList;


import java.util.List;




public class ItemService {
	
	
	static List<Item> listOfItems=new ArrayList<Item>();
	
	
	public static List<Item>  addItem(Item item){
		
		listOfItems.add(item);
		
		return listOfItems;
		
	}
	
	
	public static List<Item> deleteItem(int itemId)
	{
		Item[] arrayOfitems=listOfItems.toArray(new Item[listOfItems.size()] );
		for(Item item:arrayOfitems){
			if(item.getId()==itemId){
				listOfItems.remove(item);
			}
		}
		
		return listOfItems;
	}
	
	
	public static List<Item> listitems()
	{
		return listOfItems;
	}
	
	
	public static List<Item> addItems(List<Item> items)
	{
	
		for(Item item :items){
		
			listOfItems.add(item);
		}
		
		return listOfItems;
		
	}
	
	public static double getTotalTaxAmount()
	{
		double itemsTax=0.0;
		double amount=0.0;
		
		double tax=0.0;
		

		for (Item item:listOfItems)
		{
			 amount=item.getAmount();
			
			 tax=amount*0.25;
			
			 itemsTax=itemsTax+tax;
			
		}
		return itemsTax;
		
		
	}
	
	public static double getTotalAmount()
	{
		double totalAmount=0;
		for (Item item:listOfItems)
		{
			totalAmount=totalAmount+item.getAmount();
		}
		return totalAmount;
	}
	
	
	
	
	
}