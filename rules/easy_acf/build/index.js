var addRuleTypeCategory = BBLogic.api.addRuleTypeCategory,
    addRuleType = BBLogic.api.addRuleType,
    getFormPreset = BBLogic.api.getFormPreset,
    __ = BBLogic.i18n.__;


addRuleTypeCategory('easyacf', {
    label: __('Easy ACF')
});


addRuleType('easyacf/settings-field', {
    label: __('Easy ACF Field'),
    category: 'easyacf',
	form: function form(_ref) {
		var rule = _ref.rule;
		var taxonomy = rule.taxonomy;
		var fieldtype = rule.fieldtype;
		var operator = rule.operator;

		var fieldoperators = {
			color_picker: 	{
						operators: [ 'equals', 'does_not_equal' , 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			date_picker: 	{
						operators: [ 'equals', 'does_not_equal' , 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			date_time_picker: 	{
						operators: [ 'equals', 'does_not_equal' , 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			email: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			file: 	{
						operators: [ 'is_set' , 'is_not_set' ],
						hasvalue: false,
						hasend: false
					},

			gallery: 	{
						operators: [ 'is_set' , 'is_not_set' ],
						hasvalue: false,
						hasend: false
					},

			image: 	{
						operators: [ 'is_set' , 'is_not_set' ],
						hasvalue: false,
						hasend: false
					},

			link: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false

					},

			number: 	{
						operators: ['equals', 'does_not_equal' , 'is_greater_than', 'is_not_greater_than',
									'is_greater_than_or_equal_to', 'is_less_than_or_equal_to',
									'is_set', 'is_not_set', 'within', 'not_within' ],
						hasvalue: true,
						hasend: true
					},

			password: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			radio: 	{
						operators: ['equals', 'does_not_equal' , 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			range: 	{
						operators: ['within', 'not_within' ],
						hasvalue: true,
						hasend: true
					},

			select:	{
						operators: ['equals', 'does_not_equal' , 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			text: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			textarea: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			time_picker: 	{
						operators: [ 'equals', 'does_not_equal' , 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			true_false: 	{
						operators: [ 'is_set' , 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			url: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false
					},

			wysiwyg: 	{
						operators: ['equals', 'does_not_equal' , 'starts_with', 'ends_with',
									'contains', 'does_not_contain' , 'is_empty',
									'is_set', 'is_not_set' ],
						hasvalue: true,
						hasend: false
					}

		};

		return {
			fieldtype: {
				type: 'select',
				route: 'bb-logic/v1/easyacf/fieldtypes',

			},
			key: {
				type: 'select',
				route: fieldtype ? 'bb-logic/v1/easyacf/fields?fieldtype=' + fieldtype : null,
				visible: fieldtype,
			},
			operator: {
				type: 'operator',
				operators: ( fieldtype in fieldoperators ) ? fieldoperators[ fieldtype ].operators : ['equals', 'does_not_equal' , 'starts_with', 'ends_with', 'is_less_than' , 'is_less_than_or_equal_to' , 'is_greater_than' , 'is_greater_than_or_equal_to' , 'is_set', 'is_not_set' ],
				visible: fieldtype,
			},
            compare: {
                type: 'text',
                placeholder: __('Value'),
				visible: fieldtype && ( fieldtype in fieldoperators ) ? fieldoperators[ fieldtype].hasvalue : false,
            },
            end: {
                type: 'text',
                placeholder: __('End Value'),
				visible: fieldtype && ( operator == 'within' || operator == 'not_within' ) ? true : false,
            }

		};
	}
});
