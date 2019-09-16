package com.tcs.dao;

import java.util.List;

import com.tcs.entity.RecipeManagerEntity;

public interface RecipeManagerDaoInterface {

	public List<RecipeManagerEntity> fetch();
	public int addDetail(RecipeManagerEntity list);
	public List<RecipeManagerEntity> updateDetail();
	public int delete(int id);
}
