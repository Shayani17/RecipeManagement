package com.tcs.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Component;

import com.tcs.entity.RecipeManagerEntity;
import com.tcs.util.HibernateUtil;

@Component
public class RecipeManagerDao implements RecipeManagerDaoInterface {

	Session session = HibernateUtil.getSessionFactory().openSession();

	int number = 0;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<RecipeManagerEntity> fetch() {
		if (number == 0) {
			session.beginTransaction();
			// Add new Recipe for the first time
			RecipeManagerEntity en = new RecipeManagerEntity();
			en.setRecipe_category("Veg");
			en.setRecipe_ingredient("Tomato");
			en.setRecipe_instruction("kareo");
			en.setCreated_date("17.09.2019");
			en.setRecipe_name("Alooo");
			en.setRecipe_servering("3");
			session.save(en);
			session.getTransaction().commit();
			number++;
		}
		Query query = session.createQuery("select r from RecipeManagerEntity r");
		List results = query.list();
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
	public int updateDetail(RecipeManagerEntity list) {
		session.beginTransaction();
		RecipeManagerEntity recipeManagerEntity = (RecipeManagerEntity) session.get(RecipeManagerEntity.class,
				list.getRecipe_id());
		if (recipeManagerEntity != null) {
			session.merge(list);
			session.getTransaction().commit();
		}
		return 1;
	}

	@Override
	public int delete(int id) {
		session.beginTransaction();
		RecipeManagerEntity recipeManagerEntity = (RecipeManagerEntity) session.get(RecipeManagerEntity.class, id);
		if (recipeManagerEntity != null) {
			session.delete(recipeManagerEntity);
			session.getTransaction().commit();
		}
		return 1;
	}
}
