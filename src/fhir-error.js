module.exports = function(message) {
	return {
			"resourceType": "OperationOutcome",
			"text": {
				"status": "generated",
				"div": `<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">ERROR</td><td>[]</td><td><pre>${message}</pre></td>\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t</tr>\n\t\t</table>\n\t</div>`
			},
			"issue": [
				{
					"severity": "error",
					"code": "processing",
					"diagnostics": message
				}
			]
	};
}
