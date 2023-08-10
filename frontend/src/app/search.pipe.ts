import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[], searchText:string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return (
        item.trainingArea.toLowerCase().includes(searchText) ||
        item.requirementName.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText) ||
        item.institution.toLowerCase().includes(searchText)
        // item.name.toLowerCase().includes(searchText)

      );
    });
  }

}
