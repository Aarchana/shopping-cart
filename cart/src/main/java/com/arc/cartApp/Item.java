package com.arc.cartApp;

public class Item {
private int id;
private String itemName;
private Double amount;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getItemName() {
	return itemName;
}
public void setItemName(String itemName) {
	this.itemName = itemName;
}
public Double getAmount() {
	return amount;
}

public Item()
{
	
}
public Item(int id, String itemName, Double amount) {
	super();
	this.id = id;
	this.itemName = itemName;
	this.amount = amount;
}
public void setAmount(Double amount) {
	this.amount = amount;
}


}
