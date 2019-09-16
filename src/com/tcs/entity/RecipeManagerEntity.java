package com.tcs.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@org.hibernate.annotations.Entity(dynamicUpdate = true)
@Table(name = "Recipe", uniqueConstraints = {@UniqueConstraint(columnNames = "ID")})
public class RecipeManagerEntity {
	
	private static final long serialVersionUID = -1798070786993154676L;
	   @Id
	   @Column(name = "ID", unique = true, nullable = false)
	   private Integer           recipe_id;
	   @Column(name = "Recipe_Name", unique = false, nullable = true, length = 100)
	   private String            recipe_name;
	   @Column(name = "Recipe_Category", unique = false, nullable = true, length = 100)
	   private String            recipe_category;
	   @Column(name = "Recipe_Servering", unique = false, nullable = true, length = 100)
	   private String            recipe_servering;
	   @Column(name = "Recipe_Ingredient", unique = false, nullable = true, length = 100)
	   private String            recipe_ingredient;
	   @Column(name = "Recipe_Instruction", unique = false, nullable = true, length = 100)
	   private String            recipe_instruction;
	   @Column(name = "Created_Date", unique = false, nullable = true, length = 100)
	   private String            created_date;
	public Integer getRecipe_id() {
		return recipe_id;
	}
	public void setRecipe_id(Integer recipe_id) {
		this.recipe_id = recipe_id;
	}
	public String getRecipe_name() {
		return recipe_name;
	}
	public void setRecipe_name(String recipe_name) {
		this.recipe_name = recipe_name;
	}
	public String getRecipe_category() {
		return recipe_category;
	}
	public void setRecipe_category(String recipe_category) {
		this.recipe_category = recipe_category;
	}
	public String getRecipe_servering() {
		return recipe_servering;
	}
	public void setRecipe_servering(String recipe_servering) {
		this.recipe_servering = recipe_servering;
	}
	public String getRecipe_ingredient() {
		return recipe_ingredient;
	}
	public void setRecipe_ingredient(String recipe_ingredient) {
		this.recipe_ingredient = recipe_ingredient;
	}
	public String getRecipe_instruction() {
		return recipe_instruction;
	}
	public void setRecipe_instruction(String recipe_instruction) {
		this.recipe_instruction = recipe_instruction;
	}
	public String getCreated_date() {
		return created_date;
	}
	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return " [recipe_id=" + recipe_id + ", recipe_name=" + recipe_name + ", recipe_category="
				+ recipe_category + ", recipe_servering=" + recipe_servering + ", recipe_ingredient="
				+ recipe_ingredient + ", recipe_instruction=" + recipe_instruction + ", created_date=" + created_date
				+ "]";
	}
	
	   
}
