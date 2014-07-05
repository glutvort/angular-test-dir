app.filter('usaNumber', function () {
    return function (item) {
        if(item.indexOf("+1")==0) {
            item = item + " (USA)"
        }
        return item
    };
}).filter('paginationFilter', function () {
    return function (items,pager) {
        var result = [];

        var start = pager.n*(pager.p-1)
        var end = pager.n*pager.p
        result = items.slice(start,end)

        return result;
    };
}).filter('orderContactsBy',['$filter', 'contactsService', function ($filter,contactsService) {
    return function (items,value,reverse) {
        var result = $filter("orderBy")(contactsService.data.contacts,value,reverse)
        return result;
    };
}]).filter('searchContactsFilter',['$filter', function ($filter) {
    return function (items,value,scope) {
        var result = $filter("filter")(items,value)
        if (result.length != items.length) {
            scope.$root.$emit("modelChangedFromSearch", result)
        }
        return result;
    };
}])