package com.tcs.controller;


import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.tcs.entity.RecipeManagerEntity;
import com.tcs.util.HibernateUtil;
 

public class Test {
	public static void main(String[] args)
	   {
	      Session session = HibernateUtil.getSessionFactory().openSession();
	      session.beginTransaction();
	      // Add new Employee object
	      RecipeManagerEntity en = new RecipeManagerEntity();
	      /*en.setRecipeCategory("Veg");
	      en.setRecipeIngredient("Tomato");
	      en.setRecipeId(2);
	      en.setRecipeInstruction("kareo");*/
	      session.save(en);
	      session.getTransaction().commit();
	      System.out.println("herre");
	     // String hql = "FROM Resource E WHERE E.emplteam = team1";
	      Query query = session.createQuery("select r from RecipeManagerEntity r");
	      List results = query.list();
	      System.out.println("list::"+results.toString());
	      
	      HibernateUtil.shutdown();
	   }
}
