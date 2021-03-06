import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
  Query
} from '@nestjs/common'

@Controller('tuits')
export class TuitsController {
	@Get()
	getTuits(@Query() filterQuery): string {
    const {orderBy, searchTerm} = filterQuery
		return 'Hello from twitter'
	}

	@Get(':id')
	getTuit(@Param('id') id: string): string {
		return `Your tuit id is ${id}`
	}

	@Post()
	createTuit(@Body('message') message: string): string {
		return `Your tuit is ${message}`
	}

	@Patch(':id')
	updateTuit(@Param('id') id: string, @Body() tuit: string): string {
		return `The tuit ${id} has been updated`
	}

	@Delete(':id')
	deleteTuit(@Param('id') id: string): string {
		return `The tuit ${id} has been deleted`
	}
}
