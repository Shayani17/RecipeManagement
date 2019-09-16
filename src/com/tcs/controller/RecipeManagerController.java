package com.tcs.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.json.JSONException;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.tcs.dao.RecipeManagerDao;
import com.tcs.entity.RecipeManagerEntity;

@RestController
public class RecipeManagerController {

	@Autowired
	RecipeManagerDao recipeManagerDao;
	
	Gson gson;

	@RequestMapping("/index")
	String index() {
		System.out.println("Hello world!!!!!!");
		System.out.println("Hello world!!!!!!");
		return "Hello from index";
	}

	@RequestMapping(value = { "/fetchDetails" })
	@GetMapping
	public @ResponseBody String fetchDetails() throws JSONException, ParseException {

		List<RecipeManagerEntity> result = recipeManagerDao.fetch();
		org.json.JSONArray responseInneer = new org.json.JSONArray();
		org.json.JSONArray responseIngredient = new org.json.JSONArray();

		for (RecipeManagerEntity rme : result) {
			org.json.JSONObject responseInner = new org.json.JSONObject();
			responseInner.put("recipe_id", rme.getRecipe_id());
			responseInner.put("recipe_name", rme.getRecipe_name());
			responseInner.put("recipe_category", rme.getRecipe_category());
			responseInner.put("recipe_servering", rme.getRecipe_servering());
			responseInner.put("recipe_ingredient", rme.getRecipe_ingredient().split(","));
			responseInner.put("recipe_instruction", rme.getRecipe_instruction());
			responseInner.put("created_date", rme.getCreated_date());
			responseInneer.put(responseInner);
		}

		org.json.JSONObject response = new org.json.JSONObject();
		response.put("data", responseInneer);
		System.out.println("jsonInput" + response);

		return response.toString();

	}

	@RequestMapping(value = { "/addDetails" })
	@PostMapping
	public @ResponseBody String addDetails(@RequestBody JSONObject input) throws JSONException, ParseException {

		System.out.println("Input:"+input.toString());
		
		RecipeManagerEntity recipeManagerEntity = new RecipeManagerEntity();// gson.fromJson(input.toString(), RecipeManagerEntity.class);
		
		recipeManagerEntity.setCreated_date(new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date()));
		recipeManagerEntity.setRecipe_category(input.get("recipe_category").toString());
		recipeManagerEntity.setRecipe_id(Integer.parseInt("5"));
		recipeManagerEntity.setRecipe_ingredient(input.get("recipe_ingredient").toString());
		recipeManagerEntity.setRecipe_instruction(input.get("recipe_instruction").toString());
		recipeManagerEntity.setRecipe_name(input.get("recipe_name").toString());
		recipeManagerEntity.setRecipe_servering(input.get("recipe_servering").toString());
		
			
		int result = recipeManagerDao.addDetail(recipeManagerEntity);
		System.out.println("result::"+result);
		
		org.json.JSONObject response = new org.json.JSONObject();
		if(result >0) 
			response.put("data", "Added");
		else
			response.put("data", "Could not add");
		System.out.println("jsonInput" + response);

		return response.toString();
	}
	
/*	@RequestMapping(value = { "/updateDetails" })
	@GetMapping
	public @ResponseBody String updateDetails() throws JSONException, ParseException {

		List<RecipeManagerEntity> result = recipeManagerDao.fetch();
		org.json.JSONArray responseInneer = new org.json.JSONArray();
		org.json.JSONArray responseIngredient = new org.json.JSONArray();

		for (RecipeManagerEntity rme : result) {
			org.json.JSONObject responseInner = new org.json.JSONObject();
			responseInner.put("recipe_id", rme.getRecipeId());
			responseInner.put("recipe_name", rme.getRecipeName());
			responseInner.put("recipe_category", rme.getRecipeCategory());
			responseInner.put("recipe_servering", rme.getRecipeServering());
			responseIngredient.put(rme.getRecipeIngredient().split(","));
			responseInner.put("recipe_ingredient", responseIngredient);
			responseInner.put("recipe_instruction", rme.getRecipeInstruction());
			responseInner.put("created_date", rme.getCreatedDate());
			responseInneer.put(responseInner);
		}

		org.json.JSONObject response = new org.json.JSONObject();
		response.put("data", responseInneer);
		System.out.println("jsonInput" + response);

		return response.toString();
	}
	*/
	@RequestMapping(value = { "/deleteDetails" })
	@PostMapping
	public @ResponseBody String deleteDetails(@RequestBody JSONObject input) throws JSONException, ParseException {

		int id= Integer.parseInt(input.get("id").toString().split("\\.")[0]);
		System.out.println("id::"+id);
		recipeManagerDao.delete(id);
		
		org.json.JSONObject response = new org.json.JSONObject();
		response.put("data", "Record Deleted");
		System.out.println("jsonInput" + response);

		return response.toString();
	}

	
}
