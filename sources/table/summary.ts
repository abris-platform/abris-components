import * as ko from "knockout";
import "./summary.scss";
import { ITableColumn } from ".";

var summaryTemplate = require("text-loader!./summary.html");

const Functions: Array<{ title: string; value: string; types?: string[] }> =  [
  { title: "-", value: "" }, 
  { title: "Σ", value: "sum", types: ["integer", "money"] }, 
  { title: "x̄", value: "avg", types: ["integer", "money"] }, 
  { title: "min", value: "min", types: ["integer", "money", "date"] },
  { title: "max", value: "max", types: ["integer", "money", "date"] },
  { title: "Ν", value: "count" }
];

export class TableSummaryItem {
  constructor(public title: string, public value: string ) {
  }
}

export class TableSummaryViewModel {
  constructor(private column: ITableColumn) {
    this.value = column.summaryValue;
    this.summaryItems(Functions.filter(funcDescription => {
        return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1
      }).map(funcDescription => new TableSummaryItem (funcDescription.title, funcDescription.value)));
    this.func.subscribe(v => column.summaryParams({ func: v, field: column.name, }));
  }
  value: ko.Observable;
  func= ko.observable(null);
  summaryItems = ko.observableArray<TableSummaryItem>();
}

ko.components.register("abris-table-summary", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new TableSummaryViewModel(params.column);
    }
  },
  template: summaryTemplate
});

