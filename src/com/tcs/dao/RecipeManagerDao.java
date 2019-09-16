package com.tcs.dao;

import java.sql.ResultSet;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Component;

import com.tcs.entity.RecipeManagerEntity;
import com.tcs.util.HibernateUtil;

@Component
public class RecipeManagerDao implements RecipeManagerDaoInterface {


	 Session session = HibernateUtil.getSessionFactory().openSession();
	 
	 int number =0;
	 
	@Override
	public List<RecipeManagerEntity> fetch() {
		System.out.println("We are here.... number::"+ number);
		 
		if(number==0) {
			session.beginTransaction();
	      // Add new Employee object
	      RecipeManagerEntity en = new RecipeManagerEntity();
	      en.setRecipe_category("Veg");
	      en.setRecipe_ingredient("Tomato");
	      en.setRecipe_id(1);
	      en.setRecipe_instruction("kareo");
	      en.setCreated_date("17-01-2001");
	      en.setRecipe_name("Alooo");
	      session.save(en);
	      session.getTransaction().commit();
	      number++;
	      System.out.println("Number increased::"+number);
		}
	      System.out.println("herre");
	     // String hql = "FROM Resource E WHERE E.emplteam = team1";
	      Query query = session.createQuery("select r from RecipeManagerEntity r");
	      List results = query.list();
	      System.out.println("list::"+results.toString());
	      
	      //HibernateUtil.shutdown();
		return results;
	}

	@Override
	public int addDetail(RecipeManagerEntity list) {
		session.beginTransaction();
	       int id = (int) session.save(list);
	      session.getTransaction().commit();
	      
		return id;
	}

	@Override
	public List<RecipeManagerEntity> updateDetail() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int delete(int id) {
	  //Delete a persistent object
	    session.beginTransaction();
	    RecipeManagerEntity customer1= (RecipeManagerEntity) session.get(RecipeManagerEntity.class, id);
        if(customer1!=null){
           session.delete(customer1);
           System.out.println("Customer 1 is deleted");
        }
		return 1;
	}

}
