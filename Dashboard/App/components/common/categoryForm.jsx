import React from "react";
import PropTypes from "prop-types";
import TextInput from "../textInput.jsx";
import SelectInput from "../selectInput.jsx";

const CategoryForm = ({
    category,
    parentCategories,
    onSave,
    onChange,
    saving = false,
    errors = {}
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{category.id ? "Edit" : "Add"} Category</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="name"
                label="Name"
                value={category.name}
                onChange={onChange}
                error={errors.name}
            />

            <SelectInput
                name="parentId"
                label="ParentCategory"
                value={course.authorId || ""}
                defaultOption="Select ParentCategory"
                options={parentCategories.map(parentCategory => ({
                    value: parentCategory.id,
                    text: parentCategory.name
                }))}
                onChange={onChange}
            />
            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

CategoryForm.propTypes = {
    parentCategories: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default CategoryForm;
