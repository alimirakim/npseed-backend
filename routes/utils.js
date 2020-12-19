
function normalizeCategory(cat) {
  return {
    id: cat.id,
    category: cat.category,
    traitTypeIds: cat.TraitTypes.filter(traitT => traitT.id),
  }
}


function normalizeTraitType(traitT) {
  // Return normalized traitType object. TagTypes and Traits are converts to ids
  return {
    id: traitT.id,
    traitType: traitT.traitType,
    tagTypeIds: traitT.TagTypes.filter(tagT => tagT.id),
    traitIds: traitT.Traits.filter(trait => trait.id),
  }
}


function normalizeTrait(tr) {
  // Return normalized trait object. Tags are converted to id list
  return {
    id: tr.id,
    trait: tr.trait,
    tagIds: tr.Tags.filter(t => t.id),
  }
}


function normalizeTagType(tagT) {
  return {
    id: tagT.id,
    tagType: tagT.tagType,
    tags: tagT.Tags.filter(t = t.id)
  }
}


module.exports = {
  normalizeCategory,
  normalizeTraitType,
  normalizeTrait,
  normalizeTagType,
}